import React from "react";
import styles from "../styles/UpperInfo.module.css";

const UpperSideInfo = () => {
  return (
    <div className="flex justify-center mt-6 items-center rounded-md border-2 border-gray-200 bg-white">
      <div className="flex flex-col gap-y-2 w-full justify-between p-4">
        <div className="flex gap-x-2 items-center">
          <h3 className="text-sm font-bold text-NavColor border-b-2 border-textOrange w-fit pb-1">
            Activity
          </h3>
          <div className="text-base text-gray-600 pb-1">
            | <span className="pl-1">Alerts</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 mt-2">
          <div className="flex flex-col border-b-2 border-gray-300 pb-2">
            <div className="flex justify-between items-center">
              <div className="text-NavColor text-sm font-semibold">
                Akarshan Chauhan
              </div>
              <div className="text-gray-500 text-xs">6h</div>
            </div>
            <div className="text-xs text-gray-600 pt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </div>
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 pb-2">
            <div className="flex justify-between items-center">
              <div className="text-NavColor text-sm font-semibold">
                Akarshan Chauhan
              </div>
              <div className="text-gray-500 text-xs">6h</div>
            </div>
            <div className="text-xs text-gray-600 pt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </div>
          </div>
          <div className="flex flex-col pb-2">
            <div className="flex justify-between items-center">
              <div className="text-NavColor text-sm font-semibold">
                Akarshan Chauhan
              </div>
              <div className="text-gray-500 text-xs">6h</div>
            </div>
            <div className="text-xs text-gray-600 pt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </div>
          </div>
        </div>
      </div>
      <div className="mx-3 flex flex-col">
        <div>
          <svg
            width="4"
            height="40"
            viewBox="0 0 4 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="4" height="40" rx="2" fill="#FF8000" />
          </svg>
        </div>
        <svg
          width="4"
          height="263"
          viewBox="0 0 4 263"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.833008" width="4" height="262.167" rx="2" fill="#D1D5DB" />
        </svg>
      </div>
    </div>
  );
};

export default UpperSideInfo;
