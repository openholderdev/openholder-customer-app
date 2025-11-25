import { IoInformation } from "react-icons/io5";

export default function WalletCompleteKycBanner() {
  return (
    <div className="gap-6 px-4 grid grid-cols-12 items-center w-full h-20 bg-orange-300">
      <div className="flex items-center gap-2 col-span-9 pr-4">
        <p className="text-sm flex items-center gap-2 font-bold">
          <IoInformation className="text-xl bg-white h-10 w-10 rounded-full" />
          Completa tu KYC, verifica tu wallet y haz tu primera inversión
        </p>
      </div>
      <div className="col-span-3 flex justify-end">
        <button className="bg-black text-white shadow-md  px-4 py-1 rounded-full text-sm font-bold cursor-pointer">
          VALIDAR
        </button>
      </div>
    </div>
  );
}
