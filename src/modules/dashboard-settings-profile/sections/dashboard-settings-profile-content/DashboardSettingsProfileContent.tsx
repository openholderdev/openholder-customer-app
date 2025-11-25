import { useSession, signOut } from "next-auth/react";
import { MdOutlineEdit } from "react-icons/md";

export default function DashboardSettingsProfileContent() {
  return (
    <section
      data-testid="dashboard-settings-profile-content"
      className="bg-[#f1f2f3] min-h-[28rem]"
    >
      <div className="p-4">
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-md">
          <div data-testid="profile-main-data" className="flex gap-6">
            <div className="cursor-pointer bg-[#171717] border-1 border-gray-700 fit-content w-20 h-20 rounded-full text-white relative flex items-center justify-center text-4xl font-bold">
              <p>Kr</p>
              <div className="absolute bottom-0 left-0 bg-orange-400 p-1 rounded-lg cursor-pointer">
                <MdOutlineEdit className="text-lg" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Kevin rivera</p>
              <div className="bg-green-500 w-22 flex justify-center items-center rounded-full font-semibold">
                <p className="text-xs">MEMEBRESIA</p>
              </div>
              <span className="text-gray-400 text-xs underline cursor-pointer">
                Ver datos personales
              </span>
            </div>
          </div>
          <div className="py-10">
            <button
              onClick={() =>
                signOut({
                  redirect: true,
                  callbackUrl: "/auth/login",
                })
              }
              className="cursor-pointer bg-white w-full py-3 rounded-full text-red-500 font-semibold border-2 border-red-500"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
