import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

export const DasboardSuccessRegisterView = observer(function DasboardSuccessRegisterView() {
  const router = useRouter();
  useEffect(() => {
    return () => {
      localStorage.removeItem("registeredEmail");
    };
  }, []);
  return (
    <section className="min-h-[70vh] pt-10 flex flex-col justify-center items-center gap-6 px-4 max-w-2xl mx-auto">
      <div className="w-full flex justify-center">
        <FaCheckCircle className="text-5xl text-green-600" />
      </div>
      <h2 className="text-2xl font-semibold text-center">¡Registro completado con éxito!</h2>

      <div className="space-y-4 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 ">
          <h3 className="text-lg font-semibold mb-3">Siguiente paso: Verificación KYC</h3>
          <p className="text-body">
            Para invertir en la plataforma, necesitas completar la verificación de identidad (KYC).
            Este es un requisito regulatorio que garantiza la seguridad de todos los inversores y
            cumple con la normativa de prevención de blanqueo de capitales.
          </p>
        </div>

        <button
          onClick={() => router.push("/dashboard/settings/legal-verification")}
          className="cursor-pointer hover:bg-gray-800 bg-black py-2 rounded-lg text-white px-6 "
        >
          Completar verificación KYC
        </button>
      </div>
    </section>
  );
});
