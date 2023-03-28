import React, { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SideInfo from "../components/SideInfo";
import Videos from "../components/Videos";

const Dashboard = () => {
  const [drop, setdrop] = useState(true);
  return (
    <>
      <div>
        <Header drop={drop} setdrop={setdrop} />
      </div>
      <div className="flex">
        <div className="w-[10%] lg:w-[20%]">
          <Sidebar navOpen={drop} />
        </div>
        <div className="flex w-full mx-5 rounded-lg my-2 border-2 border-[#E6E9EC] lg:w-[100%] bg-dashbordGray">
          <div className="w-[75%] flex flex-col gap-y-5">
            <Banner />
            <Videos />
          </div>
          <div className="w-[24%]">
            <SideInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
