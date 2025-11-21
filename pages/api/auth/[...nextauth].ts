import connectDB from "@/API/configs/db/mongoconnection";
import { CUSTOMER_AUTHENTICATE_SESSION } from "@/API/configs/endpoints";
import { AuthenticateRepository } from "@/API/customers/core/Authenticator/infra/AuthenticateRepository";
import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Iniciar sesión",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const db = await connectDB();
          const customerCollection = db.collection("customers");
          const customer = await customerCollection.findOne({ email: credentials?.email });

          if (!customer) {
            return null;
          }

          return {
            email: customer.email,
            password: customer.password,
            id: customer.customerId,
            ...customer
          };

        }  catch (error) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard`;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
