import React from "react";

const Chart = () => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
      <div className="flex flex-col">
        <div className="w-fit text-NavColor font-semibold border-b-2 border-textOrange">
          User Analytics
        </div>
        <div className="flex gap-x-4 justify-end">
          <div className="flex gap-x-2 items-center">
            <div className="text-sm text-gray-500">7d</div>
            <div>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="gray"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-x-1 items-center">
            <div className="text-sm text-gray-500">Hours</div>
            <div>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="gray"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="pt-12 mt-5 border-l-2 border-b-2 border-gray-400">
          <div className="overflow-y-auto">
            <svg
              width="879"
              height="173"
              className="overflow-y-auto"
              viewBox="0 0 879 173"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M108.651 51.8507L0.481689 69.3V172.5H878.032V43.8739L682.373 0.5L554.054 61.3232L365.288 23.9319L218.411 83.758L108.651 51.8507Z"
                fill="#E1F0FB"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
