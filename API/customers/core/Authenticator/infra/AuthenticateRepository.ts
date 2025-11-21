import { NextApiRequest, NextApiResponse } from "next";
import { APIAuthenticationRepository } from "../application/AuthenticatorRepository";
import connectDB from "@/API/configs/db/mongoconnection";
import { CustomerAuthenticationDomain } from "../domain/models/CustomerAuthenticationDomain";
import bcrypt from "bcryptjs";

export interface AuthenticateException {
  success: boolean;
  error?: {
    code: string;
    message: string;
  };
}
export class AuthenticateRepository implements APIAuthenticationRepository {
  #req: NextApiRequest;
  #res: NextApiResponse;
  constructor(req: NextApiRequest, res: NextApiResponse){
    this.#req = req;
    this.#res = res;
  };
  async authenticate(): Promise<CustomerAuthenticationDomain | void> {
    try {
      console.log('__AUTHENTICATE REPOSITORY__')
      const db = await connectDB();
      const user = await db.collection('customers').findOne({ email: this.#req.body.email });
      
      if (!user) {
        return this.#res.status(404).json({ 
          success: false,
          error: {
            code: 404,
            message: 'El email o la contraseña son incorrectos'
          }
         });
      }

      if (!user?.emailVerified) {
        return this.#res.status(403).json({ 
          success: false,
          message: 'Por favor verifica tu email antes de iniciar sesión' 
        });
      }

      const isCorrectPassword = await bcrypt.compare(this.#req.body.password, user.password!);
      if (!isCorrectPassword) {
        return this.#res.status(401).json({ 
          success: false,
          message: 'Credenciales inválidas' 
        });
      }

      const { password: _, ...customerWithoutPassword } = user;

      return this.#res.status(200).json(customerWithoutPassword);
    } catch (error) {
      return this.#res.status(500).json({ message: 'Internal server error', error });
    }
  }
}
