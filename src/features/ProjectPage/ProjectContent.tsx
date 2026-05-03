export const ProjectContent = () => {
  return (
    <div className="bg-gray-700 p-2 overflow-hidden">
      <div className="w-full h-full pl-15 space-y-2 overflow-hidden overflow-y-scroll">
        <div className="bg-gray-800 h-150 p-3 flex flex-col w-12/13 rounded-2xl">
          <span className="font-bold text-white text-2xl">
            Game Projects & Mechanics
          </span>
          {/* cards */}
          <div className="flex h-full w-full relative mt-12 p-2">
            <div className="grid grid-rows-1 w-full relative items-center">
              <span className="text-stone-300 absolute -top-7 left-5 text-2xl font-semibold">
                Voxel Terrain System
              </span>
              <div className="relative w-full h-full">
                <div className="p-5 w-full h-full transition-all duration-300 absolute hover:p-2 hover:transition-all shadow-xl">
                  <img
                    src="/assets/projects-screenshots/project2.gif"
                    // onPlaying={}
                    className="object-contain w-full h-full"
                    onClick={() => {
                      window.open(
                        "https://github.com/Marccoder12/Farm_Terrain_Generator",
                        "_blank",
                      );
                    }}
                  />
                  {/* <img
                  src="/assets/projects-screenshots/portfolio.png"
                  className="p-4 w-full object-contain h-full rounded-2xl"
                  /> */}
                </div>
              </div>
            </div>
            <div className="w-full h-full transition-all relative  shadow-xl">
              <span className="text-stone-300 absolute -top-7 text-2xl font-semibold">
                OpenGL Graphics Project
                <span className="text-green-500">(C++ & GLSL)</span>
              </span>
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="absolute w-auto h-full transition-all duration-300 p-5 hover:p-2 hover:transition-all">
                  <img
                    src="/assets/projects-screenshots/project.gif"
                    className="object-contain w-full h-full"
                    onClick={() => {
                      window.open(
                        "https://github.com/Marccoder12/OpenGL-Project",
                        "_blank",
                      );
                      console.log("go to live demo of [Verve task Live]");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 h-150 p-3 flex flex-col w-12/13 rounded-2xl">
          <span className="font-bold text-white text-2xl">
            Front-end Designs
          </span>
          <div className="flex h-10/11">
            {/* cards */}
            <div className="flex h-full w-full relative">
              <div className="grid grid-rows-1 grow-2 w-full items-center">
                <span className="text-stone-300 absolute text-2xl -top-5 left-100 font-semibold">
                  Finetask<span className="text-green-500">(In-Dev)</span>
                </span>
                <div className="p-4 w-full h-full transition-all duration-300 relative shadow-xl rounded-2xl hover:p-0 hover:transition-all">
                  <img
                    src="/assets/projects-screenshots/finetask.png"
                    className="object-contain w-full h-full"
                    onClick={() => {
                      window.open(
                        "https://react-app-ivory-five-81.vercel.app/",
                        "_blank",
                      );
                    }}
                  />
                </div>
                {/* <img
                  src="/assets/projects-screenshots/portfolio.png"
                  className="p-4 w-full object-contain h-full rounded-2xl"
                  /> */}
              </div>
              <span className="text-stone-300 absolute -top-5 right-40 text-2xl font-semibold">
                VerveTask
              </span>
              <div className="w-full h-full">
                <div className="p-4 w-full h-full transition-all duration-300 shadow-xl rounded-2xl hover:p-1 hover:transition-all">
                  <img
                    src="/assets/projects-screenshots/vervetask_1.png"
                    className="object-contain h-full w-full"
                    onClick={() => {
                      window.open(
                        "https://verve-task-app.vercel.app/",
                        "_blank",
                      );
                      // window.open(
                      //   "https://github.com/Marccoder12/verve-task-app/",
                      //   "_blank",
                      // );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 h-150 p-3 flex flex-col w-12/13 rounded-2xl">
          <span className="font-bold text-white text-2xl">3d Designs</span>
          {/* cards */}
          <div className="flex h-full w-full relative mt-12 p-2">
            <div className="grid grid-rows-1 w-full relative items-center">
              <div className="relative w-full h-full">
                <div className="p-5 w-full h-full transition-all duration-300 absolute hover:p-2 hover:transition-all shadow-xl">
                  <img
                    src="assets/phone_stand_2.png"
                    className="object-contain w-full h-full"
                    onClick={() => {
                      console.log("go to live demo of [Fine task Live]");
                    }}
                  />
                  {/* <img
                  src="/assets/projects-screenshots/portfolio.png"
                  className="p-4 w-full object-contain h-full rounded-2xl"
                  /> */}
                </div>
              </div>
            </div>
            <div className="w-full h-full transition-all relative  shadow-xl">
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="absolute w-auto transition-all duration-300 h-full p-5 hover:p-2 hover:transition-all">
                  <img
                    src="/assets/ANNOUCEMENT.png"
                    className="object-contain w-full h-full"
                    onClick={() => {
                      console.log("go to live demo of [Verve task Live]");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full transition-all relative  shadow-xl">
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="absolute w-auto transition-all duration-300 h-full p-5 hover:p-2 hover:transition-all">
                  <img
                    src="/assets/projects-screenshots/airpods-render.jpg"
                    className="object-contain w-full h-full"
                    onClick={() => {
                      console.log("go to live demo of [Verve task Live]");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
