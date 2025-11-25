import { observer } from "mobx-react-lite";
import { FaExclamation } from "react-icons/fa6";
import { DashboardSettingsWalletController } from "../../DashboardSettingsWalletController";

export const WalletSignContracts = observer(function WalletSignContracts() {
  const store = DashboardSettingsWalletController.getInstance();

  return (
    <section data-testid="wallet-sign-contracts" className="px-4 pt-4">
      <div className="px-8 py-7 bg-white rounded-lg shadow-md">
        <div>
          <h4 className="text-xl font-semibold mb-3">Validar wallet</h4>
          <p className="text-sm">
            Solo las billeteras incluidas en la whites oueden adquirir tokens e interactural con la
            plataforma. Tenemos dos listas difrerentes en funcion de si quieres invertir en
            inmuebles lanzados en euro yç/o dolares
          </p>
        </div>
        <div className="pt-8 w-full gap-6 grid grid-cols-12">
          <div className="col-span-12 shadow-md bg-[#F1F2F3] p-4 rounded-md">
            <div className="flex gap-2 justify-between mb-2">
              <p className="font-semibold">Global</p>
              <span className="text-red-900 bg-red-300 px-2 rounded-full justify-center text-xs flex items-center font-bold text-red-900">
                <FaExclamation />
                No solicitado
              </span>
            </div>
            <p className="text-[#171717] text-sm mb-4">
              text-blue-500 hover:text-blue-700 underline
            </p>
            <button
              onClick={() => store.createCustomerWallet("GLOBAL")}
              className="py-2 w-full font-semibold text-sm text-green-900 bg-green-400 px-5 rounded-lg"
            >
              Solicitar
            </button>
          </div>
          <div className="col-span-12 shadow-md bg-[#F1F2F3] p-4 rounded-md">
            <div className="flex gap-2 justify-between mb-2">
              <p className="font-semibold">España</p>
              <span className="text-red-900 bg-red-300 px-2 rounded-full justify-center text-xs flex items-center font-bold text-red-900">
                <FaExclamation />
                No solicitado
              </span>
            </div>
            <p className="text-[#171717] text-sm mb-4">
              text-blue-500 hover:text-blue-700 underline
            </p>
            <button
              onClick={() => store.createCustomerWallet("SPAIN")}
              className="py-2 w-full font-semibold text-sm text-green-900 bg-green-400 px-5 rounded-lg"
            >
              Solicitar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
