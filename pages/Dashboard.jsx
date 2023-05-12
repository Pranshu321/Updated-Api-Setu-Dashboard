import React, { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LowerTags from "../components/LowerTags";
import Sidebar from "../components/SideNavigation/Sidebar";
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
import IconSidebar from "../components/SideNavigation/IconSidebar";
import ApiAnalytics from "../components/Screen/ApiAnalytics";
import BreadcrumpsDoc from "../utils/Breadcrumps/BreadcrumpsDoc";
import BreadcrumpsEndpoint from "../utils/Breadcrumps/BreadcrupsEndpoint";
import Modals from "../utils/Modals";

const Dashboard = () => {
  const [drop, setdrop] = useState(true);
  const [details, setdetails] = useState(false);
  const [NextPage, setNextPage] = useState(0);
  const [content, setContent] = useState("");
  const [modal , setModal] = useState(false);
  return (
    <>
      <div onClick={() => setModal(!modal)}>
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
              {NextPage === 1 && <Breadcrumps last={content} />}
              {NextPage > 1 && NextPage < 6 && (
                <BreadcrumpsDoc last={content} />
              )}
              {NextPage >= 6 && <BreadcrumpsEndpoint last={content} />}
              {NextPage === 4 && (
                <div class="flex my-3 border-2 rounded-md border-gray-200">
                  <span class="inline-flex mr-2 py-1 items-center px-10 text-NavColor font-semibold text-[16px] border-r-2 border-gray-300 rounded-l-md">
                    POST
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    class="bg-gray-50 text-NavColor block flex-1 min-w-0 w-full text-sm p-2.5"
                    value={"/v2/auth/generateOTP"}
                  />
                </div>
              )}
              {NextPage > 1 ? (
                <div>
                  <Tabs
                    NextPage={NextPage}
                    setNext={setNextPage}
                    setContent={setContent}
                  />
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
              ) : null}
              <div>
                <div
                  className={`absolute ${
                    modal ? "block" : "hidden"
                  } top-1/3 left-1/4`}
                >
                  <div className="max-h-max">
                    <Modals setModal={setModal} />
                  </div>
                </div>
              </div>
              {NextPage === 1 ? <ManualForm NextPage={setNextPage} /> : null}
              {NextPage === 2 || NextPage === 4 ? (
                <Documentation_Form setContent={setContent} />
              ) : null}
              {/* {(NextPage === 2 || NextPage === 4) && <SideResponse />} */}
              {/* {(NextPage === 2 || NextPage === 4) && <FullRequestOverview />} */}
              {(NextPage === 3 || NextPage === 5) && (
                <Authentication setContent={setContent} />
              )}
              {NextPage === 6 && <Headers_Design setContent={setContent} />}
              {NextPage === 7 && <Request_Frontend setContent={setContent} />}
            </div>
          </div>
          <div className="lg:flex lg:flex-col hidden w-[24%]">
            {NextPage === 0 ? (
              <div>
                <UpperSideInfo />
                <SideInfo />
              </div>
            ) : (
              <RightViewListing />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
