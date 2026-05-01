import { IconBase, IconType } from "react-icons";
import { AiFillProject } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {
  FiCode,
  FiGrid,
  FiHome,
  FiBook,
  FiPhone,
  FiSettings,
  FiUser,
} from "react-icons/fi";

export const Topbar = () => {
  return (
    <div
      className="w-full bg-gray-800 h-full border-b-2
    border-stone-400 shadow-2xl shadow-white flex justify-end pr-12 space-x-20"
    >
      <RouteSelect title="Home" path="/" Icon={FiHome} />
      <RouteSelect title="Projects" path="projects" Icon={FiBook} />
      <RouteSelect title="Contact Me" path="/contact" Icon={FiPhone} />
    </div>
  );
};

export const RouteSelect = ({
  title,
  path,
  Icon,
}: {
  title: string;
  path?: string;
  Icon: IconType;
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `p-[30px] w-[200px] bg-gray-850 transition-all flex justify-center items-center hover:bg-gray-700 ${isActive ? "border-b-3 border-blue-500" : ""} `
      }
      to={path ?? ""}
    >
      <div className=" flex gap-x-3">
        <Icon className="text-white text-xl" />
        <span className="text-white">{title}</span>
      </div>
    </NavLink>
  );
};
