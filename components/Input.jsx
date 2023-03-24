import React from "react";

const Input = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[95%] gap-y-4">
        <div className="text-2xl text-center lg:text-left font-semibold text-[#1D4379]">
          Add New Teammates
        </div>
        <div className="flex flex-col gap-y-3 lg:flex-row items-center lg:justify-between w-full">
          <div className="flex flex-col items-center lg:flex-row gap-y-3 gap-x-2 w-[90%]">
            <input
              type="text"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-2 px-2 w-[80%] lg:w-[40%]"
              placeholder="name@flowbite.com"
            />
            <input
              type="text"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-2 px-2 w-[80%] lg:w-[20%]"
              placeholder="name@flowbite.com"
            />
            <input
              type="text"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-2 px-2 w-[80%] lg:w-[35%]"
              placeholder="name@flowbite.com"
            />
          </div>
          <div>
            <button class="bg-gray-200 text-sm lg:text-base text-gray-400 font-bold py-2 px-4 rounded">
              Invite user
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
