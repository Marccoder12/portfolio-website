import { Link, NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
export const HeroContent = () => {
  return (
    <div className="bg-gray-800 flex relative justify-end">
      <div className="mt-12 h-7/9 w-18/20 relative rounded-l-4xl shadow-xl bg-[#1e283b]">
        <img
          src="/assets/hero-bg.png"
          className="w-auto h-auto ml-25 rounded-4xl inset-200 shadow-xl shadow-gray-800"
        />
        <div className="h-1/4 w-1/4 absolute top-20 left-40">
          <img
            src="/assets/profile_pic.png"
            className="w-full h-auto object-cover rounded-b-full rounded-t-3xl shadow-md shadow-gray-600"
          />
        </div>
        <div className="w-5/13 h-full space-x-3 space-y-8 absolute right-100 flex flex-col justify-center top-10">
          <div className="space-x-4">
            <span className="text-4xl font-semibold text-gray-300">
              Hello, I'm
            </span>
            <span className="text-4xl font-bold text-blue-300 text-shadow-[0px_2px_2px] text-shadow-indigo-800">
              Mark Nguh Ebonkimuyam
            </span>
          </div>
          <div className="space-x-4">
            <span className="text-4xl font-semibold text-gray-300">I'm a</span>
            <ReactTyped
              className="text-4xl font-bold text-blue-400 text-shadow-[0px_1px_1px] text-shadow-indigo-400"
              strings={[
                "Front-end Web Developer",
                "Game Programmer",
                "3D Modeller",
              ]}
              typeSpeed={30}
              backSpeed={30}
              backDelay={3000}
              loop={true}
              showCursor={true}
              cursorChar="|"
            />
          </div>
          <span className="text-2xl font-semibold text-white text-shadow[0px_1px_1px] font-sans text-shadow-stone-500">
            I build beautiful interfaces, create detailed or low-poly 3D models,
            and code engaging interactive game mechanics.
          </span>
          <div className="mt-4">
            <NavLink
              to={"/projects"}
              className="px-8 py-4 bg-blue-600 text-white cursor-pointer transition-all hover:bg-blue-800 rounded-2xl"
            >
              View Projects
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
