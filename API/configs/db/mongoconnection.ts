import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface MongoCache {
  client: MongoClient | null;
  db: Db | null;
}

declare global {
  var mongo: MongoCache | undefined;
}

let cached: MongoCache = global.mongo || { client: null, db: null };

if (!global.mongo) {
  global.mongo = cached;
}

async function connectDB(): Promise<Db> {
  if (cached.db) {
    return cached.db;
  }

  if (!cached.client) {
    cached.client = new MongoClient(MONGODB_URI);
  }

  await cached.client.connect();
  cached.db = cached.client.db('open3'); // Nombre de tu base de datos

  return cached.db;
}

export default connectDB;
