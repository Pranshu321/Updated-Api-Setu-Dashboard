import React from "react";

const SideResponse = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-5 p-4">
          <div>
            <img
              src="https://user-images.githubusercontent.com/86917304/234960948-f3771cce-926f-4b6b-82be-993ce73c3711.png"
              alt=""
              width={80}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="text-NavColor font-bold text-lg">
              Co-WIN Protected APIs
            </div>
            <div className="text-sm text-NavColor font-semibold">
              APIs provided under Co-WIN, by Ministry of Health & Public Affairs
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <div className="w-1/2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-NavColor"
              >
                Servers
              </label>
              <div className="mt-2">
                <div className="flex rounded-md px-4 shadow-sm border-2 border-gray-300 sm:max-w-full">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-NavColor "
                    // placeholder="janesmith"
                    value={"https://cdndemo-api.co-vin.in/api"}
                  />
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="pt-7">
                <div className="flex rounded-md px-4 shadow-sm border-2 border-gray-300 sm:max-w-full">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Authorization"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-b-2 border-gray-300 text-white">.</div>

          <div class="flex mt-5 border-2 rounded-md border-gray-200">
            <span class="inline-flex mr-2 py-1 items-center px-10 text-NavColor font-semibold text-[16px] border-r-2 border-gray-300 rounded-l-md">
              POST
            </span>
            <input
              type="text"
              id="website-admin"
              class="bg-gray-50 text-NavColor block flex-1 min-w-0 w-full text-sm p-2.5"
              value={"/v2/auth/generateOTP"}
            />
          </div>

          <div className="w-full border-b-2 border-gray-300 text-white">.</div>
          <div className="flex flex-col gap-y-3 mt-3">
            <div className="text-NavColor font-semibold">Parameters</div>
            <div className="font-semibold text-sm text-gray-300">
              No parameters
            </div>
          </div>
          <div className="w-full border-b-2 border-gray-300 text-white">.</div>
          <div className="flex flex-col gap-y-4 p-2 pt-5">
            <div className="flex gap-x-5">
              <div className="flex gap-x-2 items-center">
                <div className="text-sm font-semibold text-NavColor">
                  Request Body
                </div>
              </div>
            </div>
            <div>
              <textarea
                name="summary"
                id="summary"
                cols="20"
                rows="10"
                className="w-[23rem] lg:w-full outline-none border-2 p-3  rounded-md border-gray-300"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button class="bg-NavColor text-white font-bold py-2 px-10 rounded">
            Execute
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideResponse;
