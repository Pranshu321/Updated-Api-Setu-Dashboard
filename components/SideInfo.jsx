import React from "react";

const SideInfo = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-2 w-full mt-8 justify-between rounded-md border-2 border-gray-200 bg-white p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold text-NavColor border-b-2 border-textOrange w-fit pb-1">
            Helpful Articles
          </h3>
          <div className="text-xs text-gray-500">View All</div>
        </div>
        <div className="flex flex-col gap-y-4 mt-2">
          <div className="flex flex-col border-b-2 border-gray-300 pb-2">
            <div className="flex gap-x-3 items-center">
              <div className="text-NavColor text-sm font-semibold">
                Build your first API project
              </div>
              <div>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    d="M-4.87928e-08 8.38375L3.62583 4.75L-3.66465e-07 1.11625L1.11625 -4.87928e-08L5.86625 4.75L1.11625 9.5L-4.87928e-08 8.38375Z"
                    fill="#6B7280"
                  />
                </svg>
              </div>
            </div>
            <div className="text-xs text-gray-600 pt-1">
              Lorem ipsum dolor sit amet, consectetur adipis...
            </div>
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 pb-2">
            <div className="flex gap-x-3 items-center">
              <div className="text-NavColor text-sm font-semibold">
                Endpoints 101 guides
              </div>
              <div>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    d="M-4.87928e-08 8.38375L3.62583 4.75L-3.66465e-07 1.11625L1.11625 -4.87928e-08L5.86625 4.75L1.11625 9.5L-4.87928e-08 8.38375Z"
                    fill="#6B7280"
                  />
                </svg>
              </div>
            </div>
            <div className="text-xs text-gray-600 pt-1">
              Lorem ipsum dolor sit amet, consectetur adipis...
            </div>
          </div>
          <div className="flex flex-col pb-2">
            <div className="flex gap-x-3 items-center">
              <div className="text-NavColor text-sm font-semibold">
                Learn about different API formats
              </div>
              <div>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    d="M-4.87928e-08 8.38375L3.62583 4.75L-3.66465e-07 1.11625L1.11625 -4.87928e-08L5.86625 4.75L1.11625 9.5L-4.87928e-08 8.38375Z"
                    fill="#6B7280"
                  />
                </svg>
              </div>
            </div>
            <div className="text-xs text-gray-600 pt-1">
              Lorem ipsum dolor sit amet, consectetur adipis...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideInfo;
