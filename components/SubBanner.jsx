import React from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";

const SubBanner = ({ setNext }) => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4 p-4 bg-white border-2 border-gray-200 rounded-lg">
        <div className="text-lg text-center lg:text-start lg:text-xl font-semibold lg:pl-6 text-NavColor">
          Get started by adding your first API
        </div>
        <div className="flex items-center justify-center w-full px-6">
          <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span>
                  Drag and drop files or{" "}
                  <span className="font-semibold">browse</span>
                </span>
              </p>
              <p className="text-xs text-gray-500">
                JSON & YAML files (max. 1 MB)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div className="w-full justify-center items-center flex flex-col">
          <div className="text-lg text-gray-500">OR</div>
          <div className="flex justify-center items-center gap-x-3 mt-4 border-2 border-gray-300 px-7 py-3 rounded-xl">
            <div>
              <HiOutlinePencilAlt size={20} className="text-NavColor" />
            </div>
            <div
              onClick={() => setNext(1)}
              className="text-sm lg:text-base font-semibold"
            >
              Enter Details Manually
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
