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
import Breadcrumps from "../utils/Breadcrumps/Breadcrumps";
import Tabs from "../utils/Tabs";
import Documentation_Form from "../components/Screen/API Documentation/Documentation_Form";
import Authentication from "../components/Screen/API Documentation/Authentication";
import Headers_Design from "../components/Screen/EndPoint Documentation/Headers_Design";
import Request_Frontend from "../components/Screen/Request Body/Request_Frontend";
import SideResponse from "../components/Screen/Request Body/SideResponse";
import FullRequestOverview from "../components/Screen/Request Body/FullRequestOverview";
import IconSidebar from "../utils/IconSidebar";
import ApiAnalytics from "../components/Screen/ApiAnalytics";

const Dashboard = () => {
  const [drop, setdrop] = useState(true);
  const [details, setdetails] = useState(false);
  const [NextPage, setNextPage] = useState(0);
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
          <div
            className={`w-[95%] lg:w-[90%] flex flex-col ${
              NextPage != 0 ? "lg:flex-row" : "lg:flex-col"
            } lg:gap-y-0 items-stretch gap-y-5`}
          >
            {NextPage === 0 ? (
              !details ? (
                <Banner details={setdetails} />
              ) : (
                <SubBanner setNext={setNextPage} />
              )
            ) : null}
            {NextPage === 0 ? (
              <div>
                <Videos />
                <LowerTags />
              </div>
            ) : null}
            <div className="lg:flex lg:flex-col hidden w-[24%]">
              {/* <UpperSideInfo />
              <SideInfo /> */}
              {NextPage > 0 ? <LeftStepper setNextPage={setNextPage} /> : null}
            </div>
            <div className="lg:p-5 p-3 w-[100%]">
              {NextPage != 0 && <Breadcrumps />}
              {/* {NextPage > 1 ? (
                <div>
                  <Tabs NextPage={NextPage} />
                </div>
              ) : NextPage != 0 ? (
                <div>
                  <a
                    href="#"
                    aria-current="page"
                    className="inline-block p-2 text-NavColor font-semibold border-b-2 border-textOrange  rounded-t-lg active"
                  >
                    API Overview
                  </a>
                </div>
              ) : null} */}
              {NextPage === 1 ? <ManualForm NextPage={setNextPage} /> : null}
              {(NextPage === 2 || NextPage === 4) && <ApiAnalytics />}
              {/* {(NextPage === 2 || NextPage === 4) && <SideResponse />} */}
              {/* {(NextPage === 2 || NextPage === 4) && <FullRequestOverview />} */}
              {(NextPage === 3 || NextPage === 5) && <Authentication />}
              {NextPage === 6 && <Headers_Design />}
              {NextPage === 7 && <Request_Frontend />}
            </div>
          </div>
          {/* <div className="lg:flex lg:flex-col hidden w-[24%]">
            {NextPage === 0 ? (
              <div>
                <UpperSideInfo />
                <SideInfo />
              </div>
            ) : (
              <RightViewListing />
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
