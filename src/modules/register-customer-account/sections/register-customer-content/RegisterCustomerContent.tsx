'use client'

import { useEffect, useState } from "react"
import { RegisterCustomerAccountController } from "../../RegisterCustomerAccountController"
import { BiSolidError } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { isValidEmail } from "../../config/regex";

export const RegisterCustomerContent = observer(
  function RegisterCustomerContent() {
    const [email, setEmail] = useState<string>("");
    const store = RegisterCustomerAccountController.getInstance();
    const router = useRouter();
    const isEmailValid = isValidEmail(email);

    const handleVerifyEmail = async () => {
      store.checkValidEmail(email);
    };
    
    const goLogin = () => router.push('/auth/login');

    useEffect(() => {
      if (store.showErrorEmailAlreadyRegistered) {
        setTimeout(() => {
          store.showErrorEmailAlreadyRegistered = false;
        }, 10000);
      }
    },[store.showErrorEmailAlreadyRegistered])
    
    return (
      <section className="pt-20 ">
        <div className="text-center">
          <h1 className="font-semibold text-[#ff0049]">Bienvenido a OpenRent</h1>
          <div className="py-10">
            {
              store.showErrorEmailAlreadyRegistered && (
                 <div className="my-4 bg-[#FFFFFF70] flex justify-between items-center px-4 py-3 rounded-lg">
                  <div className="flex items-center">
                    <BiSolidError className="text-red-400" />
                    <span className="text-white-500 text-sm ml-2">Este email ya está registrado. <span onClick={goLogin} className="font-bold underline">¿Quieres iniciar sesión?</span></span>
                  </div>
                  <IoCloseOutline />
                </div>
              )
            }
            <div className="grid grid-cols-12">
              <label className="col-span-12 text-left text-sm py-1">¿Cuál es tu email?</label>
              <input onChange={(ev) => setEmail(ev.target.value)} className="col-span-12 bg-[#3d3d3d] px-3 py-3 border-1 border-white rounded-lg" type="text" placeholder="Ingresa tu email" />
            </div>
            <div className="flex items-center pt-2">
              <input type="checkbox" className="mr-3" /> <span className="text-sm">I agree to the 
              <span className="text-[#ff0049]">Terms of Service</span> and <span className="text-[#ff0049]">Privacy Policy</span></span>
            </div>
            <div className="pt-10">
              <button disabled={!isEmailValid} onClick={handleVerifyEmail} className="bg-[#ff0049] w-full py-3 rounded-lg hover:bg-[#ff336e] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500">Continuar</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
)

