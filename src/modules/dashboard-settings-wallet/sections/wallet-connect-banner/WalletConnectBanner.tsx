import { BiWallet } from "react-icons/bi";
import { IoInformation } from "react-icons/io5";

export default function WalletConnectBanner() {
  return (
    <div className="gap-6 px-4 grid grid-cols-12 items-center w-full h-20 bg-green-200">
      <div className="flex items-center gap-2 col-span-8 pr-4">
        <p className="text-sm flex gap-2 items-center gap-1 font-bold">
          <BiWallet className="w-6 h-6 text-xl bg-green-900 text-white p-1 rounded-full" />
          Completa tu KYC, verifica tu wallet y haz tu primera inversión
        </p>
      </div>
      <div className="col-span-4 flex justify-end">
        <button className="bg-green-900 text-white shadow-md  px-4 py-1 rounded-full text-sm font-bold cursor-pointer">
          Conectar
        </button>
      </div>
    </div>
  );
}
