import React from "react";
import Chart from "../../utils/Chart";

const ApiAnalytics = () => {
  return (
    <div>
      <div className="flex gap-y-8 h-48 flex-col bg-white mt-4 border-2 border-gray-200 p-3 rounded-lg">
        <div className="w-fit text-NavColor font-semibold border-b-2 border-textOrange">
          Status
        </div>
        <div className="flex justify-center gap-x-5">
          <div className="flex flex-col gap-y-2  justify-center items-center">
            <div className="flex gap-x-3 items-center">
              <div className="text-gray-400 text-sm">API Compliance</div>
              <div>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  className="mt-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.800415 9.13375L4.42625 5.5L0.800415 1.86625L1.91666 0.75L6.66666 5.5L1.91666 10.25L0.800415 9.13375Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>
            </div>
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 0C10.866 0 14 3.13396 14 7C14 10.866 10.866 14 7 14C3.13396 14 0 10.866 0 7C0 3.13396 3.13396 0 7 0ZM3.90308 7.18623C3.997 6.64169 4.61854 6.3385 5.10898 6.63352C5.15346 6.66006 5.1959 6.69156 5.23542 6.72773L5.23921 6.73137C5.45927 6.94225 5.70587 7.16173 5.95029 7.37931L6.16 7.56758L8.64835 4.95746C8.79696 4.80185 8.9056 4.70123 9.12858 4.65106C9.89202 4.48263 10.4288 5.41581 9.88779 5.98617L6.7865 9.24088C6.4944 9.55252 5.97231 9.58096 5.65833 9.28331C5.47837 9.11619 5.28267 8.94615 5.08477 8.7745C4.74206 8.47671 4.3925 8.17294 4.10754 7.87223C3.93648 7.70131 3.86269 7.42146 3.90308 7.18623Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-y-2  justify-center items-center">
            <div className="flex gap-x-3 items-center">
              <div className="text-gray-400 text-sm">API Production</div>
              <div>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  className="mt-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.800415 9.13375L4.42625 5.5L0.800415 1.86625L1.91666 0.75L6.66666 5.5L1.91666 10.25L0.800415 9.13375Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>
            </div>
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 0C10.866 0 14 3.13396 14 7C14 10.866 10.866 14 7 14C3.13396 14 0 10.866 0 7C0 3.13396 3.13396 0 7 0ZM3.90308 7.18623C3.997 6.64169 4.61854 6.3385 5.10898 6.63352C5.15346 6.66006 5.1959 6.69156 5.23542 6.72773L5.23921 6.73137C5.45927 6.94225 5.70587 7.16173 5.95029 7.37931L6.16 7.56758L8.64835 4.95746C8.79696 4.80185 8.9056 4.70123 9.12858 4.65106C9.89202 4.48263 10.4288 5.41581 9.88779 5.98617L6.7865 9.24088C6.4944 9.55252 5.97231 9.58096 5.65833 9.28331C5.47837 9.11619 5.28267 8.94615 5.08477 8.7745C4.74206 8.47671 4.3925 8.17294 4.10754 7.87223C3.93648 7.70131 3.86269 7.42146 3.90308 7.18623Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <div className="flex gap-x-3 items-center">
              <div className="text-gray-400 text-sm">API Published</div>
              <div>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  className="mt-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.800415 9.13375L4.42625 5.5L0.800415 1.86625L1.91666 0.75L6.66666 5.5L1.91666 10.25L0.800415 9.13375Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>
            </div>
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 0C10.866 0 14 3.13396 14 7C14 10.866 10.866 14 7 14C3.13396 14 0 10.866 0 7C0 3.13396 3.13396 0 7 0ZM3.90308 7.18623C3.997 6.64169 4.61854 6.3385 5.10898 6.63352C5.15346 6.66006 5.1959 6.69156 5.23542 6.72773L5.23921 6.73137C5.45927 6.94225 5.70587 7.16173 5.95029 7.37931L6.16 7.56758L8.64835 4.95746C8.79696 4.80185 8.9056 4.70123 9.12858 4.65106C9.89202 4.48263 10.4288 5.41581 9.88779 5.98617L6.7865 9.24088C6.4944 9.55252 5.97231 9.58096 5.65833 9.28331C5.47837 9.11619 5.28267 8.94615 5.08477 8.7745C4.74206 8.47671 4.3925 8.17294 4.10754 7.87223C3.93648 7.70131 3.86269 7.42146 3.90308 7.18623Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-y-2  justify-center items-center">
            <div className="flex gap-x-3 items-center">
              <div className="text-NavColor font-semibold text-sm">
                Awaiting approval
              </div>
            </div>
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8333 6.99984C12.8333 10.2198 10.22 12.8332 6.99996 12.8332C3.77996 12.8332 1.16663 10.2198 1.16663 6.99984C1.16663 3.77984 3.77996 1.1665 6.99996 1.1665C10.22 1.1665 12.8333 3.77984 12.8333 6.99984Z"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex text-gray-400 justify-center items-center text-[12px]">
          API has been published and awaiting approval. Once approved by your
          admin, it will become public.
        </div>
      </div>
      <div className="mt-10">
        <Chart />
      </div>
    </div>
  );
};

export default ApiAnalytics;
