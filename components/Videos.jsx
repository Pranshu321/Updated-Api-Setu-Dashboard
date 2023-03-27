import React from "react";
import Cards from "../utils/Cards";

const Videos = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-y-3">
      <div className="font-semibold text-NavColor text-base pl-6">
        Helpful Videos
      </div>
      <div className="flex gap-x-3 mx-5">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Videos;
