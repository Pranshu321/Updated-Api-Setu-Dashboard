import React from "react";
import Request_Frontend from "./Request_Frontend";
import SideResponse from "./SideResponse";

const Check = () => {
  return (
    <div className="w-full flex gap-x-3">
      <div className="w-1/2">
        <Request_Frontend />
      </div>
      <div className="w-1/2">
        <SideResponse />
      </div>
    </div>
  );
};

export default Check;
