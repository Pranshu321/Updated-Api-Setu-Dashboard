import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="flex justify-center max-h-max min-h-52 mt-8">
      <div className="bg-white w-[95%] rounded-lg p-4 lg:p-8 border-2 border-[#E6E9EC] flex flex-col gap-y-7">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              src="https://user-images.githubusercontent.com/86917304/227447572-81a83967-5662-4ca3-94b3-0ad246adc6c7.png"
              alt="file"
              width={100}
            />
          </div>
          <div className="pt-2 text-base text-gray-500">
            There are no APIs to show here
          </div>
        </div>
        <div className="flex justify-center">
          <button class="bg-NavColor font-semibold text-white py-2 px-6 border rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
