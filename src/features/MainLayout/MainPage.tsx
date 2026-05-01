import { Outlet } from "react-router-dom";
import { Topbar } from "../../components/Topbar";

export const MainPage = () => {
  return (
    <div className="grid grid-rows-[4rem_1fr] w-auto h-full">
      <Topbar />
      <Outlet />
    </div>
  );
};
