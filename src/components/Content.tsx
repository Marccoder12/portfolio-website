import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <div className="w-full bg-gray-700">
      <Outlet />
    </div>
  );
};
