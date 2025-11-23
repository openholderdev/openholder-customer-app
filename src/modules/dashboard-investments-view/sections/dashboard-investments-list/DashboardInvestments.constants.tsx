import { FaDonate } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { LuShoppingBasket } from "react-icons/lu";
import { CiCircleCheck } from "react-icons/ci";
import { MdConstruction } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoKeySharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { RiPsychotherapyLine } from "react-icons/ri";

export const TYPE_INVERSION = {
  REAL_ESTATE: {
    name: "Inmobiliario",
    icon: <MdHomeWork />,
  },
  TRANSPORT: {
    name: "Vehiculos",
    icon: <FaCarSide />,
  },
  ENERGY: {
    name: "Granjas fotovoltaicas",
    icon: <SlEnergy />,
  },
  OTHER: {
    name: "Otras.",
    icon: <RiPsychotherapyLine />,
  },
};

export type DASHBOARD_INVESTMENT_STATUS = "LANDING" | "IN_SALE" | "SOLD_TOKEN" | "IN_CONFIG";
export type DASHBOARD_ = "LANDING" | "IN_SALE" | "SOLD_TOKEN" | "IN_CONFIG";

export const TOKEN_TYPES_CONFIGS = {
  REAL_ESTATE: "Inmobiliario",
  TRANSPORT: "Vehiculos",
  ENERGY: "Energía",
  OTHER: "Otros",
};

export const TOKEN_STATUS_CONFIGS = {
  LANDING: {
    type: "LANDING" as DASHBOARD_INVESTMENT_STATUS,
    name: "Proximamente",
    button: {
      bgColor: "bg-yellow-300",
      textColor: "text-black",
      icon: <IoTimerOutline />,
    },
  },
  IN_SALE: {
    type: "IN_SALE" as DASHBOARD_INVESTMENT_STATUS,
    name: "En venta",
    button: {
      bgColor: "bg-orange-200",
      textColor: "text-orange-600",
      icon: <LuShoppingBasket />,
    },
  },
  SOLD_TOKEN: {
    type: "SOLD_TOKEN" as DASHBOARD_INVESTMENT_STATUS,
    name: "Financiado",
    button: {
      bgColor: "bg-green-200",
      textColor: "text-green-600",
      icon: <CiCircleCheck />,
    },
  },
  IN_CONFIG: {
    type: "IN_CONFIG" as DASHBOARD_INVESTMENT_STATUS,
    name: "En reforma",
    button: {
      bgColor: "bg-gray-300",
      textColor: "text-black",
      icon: <MdConstruction />,
    },
  },
  IN_RENT: {
    type: "IN_RENT" as DASHBOARD_INVESTMENT_STATUS,
    name: "En explotación",
    button: {
      bgColor: "bg-purple-400",
      textColor: "text-white",
      icon: <FaMoneyBillTrendUp />,
    },
  },
  SOLD_OUT: {
    type: "SOLD_OUT" as DASHBOARD_INVESTMENT_STATUS,
    name: "Cerrado",
    button: {
      bgColor: "bg-blue-700",
      textColor: "text-white",
      icon: <IoKeySharp />,
    },
  },
};
