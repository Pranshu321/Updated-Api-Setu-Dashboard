import React, { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LowerTags from "../components/LowerTags";
import Sidebar from "../components/Sidebar";
import SideInfo from "../components/SideInfo";
import UpperSideInfo from "../components/UpperSideInfo";
import Videos from "../components/Videos";
import SubBanner from "../components/SubBanner";
import ManualForm from "../components/Screen/ManualForm";
import RightViewListing from "../components/Screen/RightViewListing";
import LeftStepper from "../components/Screen/LeftStepper";
import Breadcrumps from "../utils/Breadcrumps";
import Tabs from "../utils/Tabs";

const Dashboard = () => {
  const [drop, setdrop] = useState(true);
  const [details, setdetails] = useState(false);
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
          <div className="w-[95%] lg:w-[75%] flex flex-col lg:flex-row lg:gap-y-0 items-stretch gap-y-5">
            {/* {!details ? <Banner details={setdetails} /> : <SubBanner />}
            <Videos />
            <LowerTags /> */}
            <div className="lg:flex lg:flex-col hidden w-[34%]">
              {/* <UpperSideInfo />
              <SideInfo /> */}
              <LeftStepper />
            </div>
            <div className="lg:p-5 p-3 w-[100%]">
              <Breadcrumps />
              <Tabs />
              <ManualForm />
            </div>
          </div>
          <div className="lg:flex lg:flex-col hidden w-[24%]">
            {/* <UpperSideInfo />
            <SideInfo /> */}
            <RightViewListing />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
