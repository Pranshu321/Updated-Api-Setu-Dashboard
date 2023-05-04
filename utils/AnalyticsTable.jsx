import React from "react";

const AnalyticsTable = () => {
  return (
    <div className="flex flex-col mt-8 gap-y-4 bg-white border-2 border-gray-200 p-3 rounded-lg h-full">
      <div className="w-fit text-NavColor ml-1 font-semibold border-b-2 border-textOrange">
        Logs
      </div>
      <div className="relative shadow-md">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-[#E1F0FB] ">
            <tr>
              <th scope="col" className="px-6 py-3 text-NavColor text-[10px]">
                Date/Time
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center text-NavColor text-[10px]">
                  User
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center text-NavColor text-[10px]">
                  API Version
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center text-NavColor text-[10px]">
                  Endpoint
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center text-NavColor text-[10px]">
                  Method
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center text-NavColor text-[10px]">
                  Response Status
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center text-NavColor text-[10px]">
                  Latency
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only"></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium border-r text-gray-500 text-[12px] whitespace-nowrap"
              >
                <span className="text-NavColor">4 March 2023</span>
                <p>10:03 PM</p>
              </th>
              <td className="px-6 py-4 text-[12px] border-r">ABC Company</td>
              <td className="px-6 py-4 text-sm border-r">1.0</td>
              <td className="px-6 py-4 text-sm border-r">/loremipsumAPI/</td>
              <td className="px-6 py-4 text-sm border-r">POST</td>
              <td className="px-12 py-4 border-r">
                <svg
                  width="40"
                  height="20"
                  viewBox="0 0 40 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="20" rx="10" fill="#6B7280" />
                  <path
                    d="M16.4346 10.4658V11.4033H11.3076L11.2686 10.6953L14.335 5.89062H15.2773L14.2568 7.63867L12.4941 10.4658H16.4346ZM15.5459 5.89062V13H14.3691V5.89062H15.5459ZM21.8545 8.84961V10.0117C21.8545 10.5684 21.7992 11.0436 21.6885 11.4375C21.5811 11.8281 21.4248 12.1455 21.2197 12.3896C21.0146 12.6338 20.7689 12.8128 20.4824 12.9268C20.1992 13.0407 19.8818 13.0977 19.5303 13.0977C19.2503 13.0977 18.9899 13.0618 18.749 12.9902C18.5114 12.9186 18.2965 12.8063 18.1045 12.6533C17.9124 12.5003 17.748 12.3034 17.6113 12.0625C17.4779 11.8184 17.3737 11.527 17.2988 11.1885C17.2272 10.8499 17.1914 10.4577 17.1914 10.0117V8.84961C17.1914 8.28971 17.2467 7.81771 17.3574 7.43359C17.4681 7.04622 17.626 6.7321 17.8311 6.49121C18.0361 6.24707 18.2803 6.06966 18.5635 5.95898C18.8499 5.84831 19.1689 5.79297 19.5205 5.79297C19.8037 5.79297 20.0641 5.82878 20.3018 5.90039C20.5426 5.96875 20.7575 6.0778 20.9463 6.22754C21.1383 6.37728 21.3011 6.57259 21.4346 6.81348C21.5713 7.05111 21.6755 7.33919 21.7471 7.67773C21.8187 8.01302 21.8545 8.40365 21.8545 8.84961ZM20.6777 10.1777V8.67383C20.6777 8.39062 20.6615 8.1416 20.6289 7.92676C20.5964 7.70866 20.5475 7.52474 20.4824 7.375C20.4206 7.22201 20.3424 7.09831 20.248 7.00391C20.1536 6.90625 20.0462 6.83626 19.9258 6.79395C19.8053 6.74837 19.6702 6.72559 19.5205 6.72559C19.3382 6.72559 19.1755 6.76139 19.0322 6.83301C18.889 6.90137 18.7686 7.01204 18.6709 7.16504C18.5732 7.31803 18.4984 7.51986 18.4463 7.77051C18.3975 8.0179 18.373 8.31901 18.373 8.67383V10.1777C18.373 10.4642 18.3893 10.7165 18.4219 10.9346C18.4544 11.1527 18.5033 11.3398 18.5684 11.4961C18.6335 11.6491 18.7116 11.776 18.8027 11.877C18.8971 11.9746 19.0046 12.0462 19.125 12.0918C19.2487 12.1374 19.3838 12.1602 19.5303 12.1602C19.7158 12.1602 19.8802 12.1243 20.0234 12.0527C20.1667 11.9811 20.2871 11.8672 20.3848 11.7109C20.4824 11.5514 20.5557 11.3447 20.6045 11.0908C20.6533 10.8369 20.6777 10.5326 20.6777 10.1777ZM24.2861 8.91309H24.9893C25.2627 8.91309 25.4889 8.86589 25.668 8.77148C25.8503 8.67708 25.9854 8.54688 26.0732 8.38086C26.1611 8.21484 26.2051 8.02441 26.2051 7.80957C26.2051 7.58496 26.1644 7.3929 26.083 7.2334C26.0049 7.07064 25.8844 6.94531 25.7217 6.85742C25.5622 6.76953 25.3587 6.72559 25.1113 6.72559C24.903 6.72559 24.7142 6.7679 24.5449 6.85254C24.3789 6.93392 24.2471 7.05111 24.1494 7.2041C24.0518 7.35384 24.0029 7.53288 24.0029 7.74121H22.8213C22.8213 7.36361 22.9206 7.02832 23.1191 6.73535C23.3177 6.44238 23.5879 6.21289 23.9297 6.04688C24.2747 5.8776 24.6621 5.79297 25.0918 5.79297C25.5508 5.79297 25.9512 5.86947 26.293 6.02246C26.638 6.1722 26.9066 6.39681 27.0986 6.69629C27.2907 6.99577 27.3867 7.36686 27.3867 7.80957C27.3867 8.01139 27.3395 8.21647 27.2451 8.4248C27.1507 8.63314 27.0107 8.82357 26.8252 8.99609C26.6396 9.16536 26.4085 9.30371 26.1318 9.41113C25.8551 9.5153 25.5345 9.56738 25.1699 9.56738H24.2861V8.91309ZM24.2861 9.83105V9.18652H25.1699C25.5866 9.18652 25.9414 9.23535 26.2344 9.33301C26.5306 9.43066 26.7715 9.56576 26.957 9.73828C27.1426 9.90755 27.2777 10.1012 27.3623 10.3193C27.4502 10.5374 27.4941 10.7686 27.4941 11.0127C27.4941 11.3447 27.4339 11.641 27.3135 11.9014C27.1963 12.1585 27.0286 12.3766 26.8105 12.5557C26.5924 12.7347 26.3369 12.8698 26.0439 12.9609C25.7542 13.0521 25.4385 13.0977 25.0967 13.0977C24.7907 13.0977 24.4977 13.0553 24.2178 12.9707C23.9378 12.8861 23.6872 12.7607 23.4658 12.5947C23.2445 12.4255 23.0687 12.2155 22.9385 11.9648C22.8115 11.7109 22.748 11.418 22.748 11.0859H23.9248C23.9248 11.2975 23.9736 11.4847 24.0713 11.6475C24.1722 11.807 24.3122 11.9323 24.4912 12.0234C24.6735 12.1146 24.8818 12.1602 25.1162 12.1602C25.3636 12.1602 25.5768 12.1162 25.7559 12.0283C25.9349 11.9404 26.0716 11.8102 26.166 11.6377C26.2637 11.4652 26.3125 11.2568 26.3125 11.0127C26.3125 10.736 26.2588 10.5114 26.1514 10.3389C26.0439 10.1663 25.891 10.0394 25.6924 9.95801C25.4938 9.87337 25.2594 9.83105 24.9893 9.83105H24.2861Z"
                    fill="white"
                  />
                </svg>
              </td>
              <td className="px-6 py-4 text-sm border-r">124 ms</td>
              <td className="px-6 py-4 text-sm border-r">
                <svg
                  width="3"
                  height="12"
                  viewBox="0 0 3 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.498 -6.56547e-08C1.79506 -5.26694e-08 2.08546 0.0859115 2.33246 0.246871C2.57947 0.40783 2.77198 0.636607 2.88567 0.904272C2.99935 1.17194 3.02909 1.46647 2.97114 1.75062C2.91318 2.03477 2.77013 2.29578 2.56007 2.50064C2.35001 2.70551 2.08238 2.84502 1.79102 2.90154C1.49966 2.95806 1.19766 2.92905 0.923205 2.81818C0.64875 2.70731 0.414169 2.51956 0.249127 2.27867C0.0840847 2.03777 -0.00400622 1.75456 -0.00400621 1.46484C-0.00400619 1.07634 0.15424 0.703754 0.43592 0.429043C0.7176 0.154331 1.09964 -8.30673e-08 1.498 -6.56547e-08ZM1.498 9.0752C1.79506 9.0752 2.08546 9.16111 2.33246 9.32207C2.57947 9.48302 2.77198 9.7118 2.88567 9.97947C2.99935 10.2471 3.02909 10.5417 2.97114 10.8258C2.91318 11.11 2.77013 11.371 2.56007 11.5758C2.35001 11.7807 2.08238 11.9202 1.79102 11.9767C1.49966 12.0333 1.19766 12.0042 0.923204 11.8934C0.648749 11.7825 0.414169 11.5948 0.249126 11.3539C0.0840843 11.113 -0.00400662 10.8298 -0.00400661 10.54C-0.00400659 10.1515 0.15424 9.77895 0.43592 9.50424C0.7176 9.22953 1.09964 9.0752 1.498 9.0752ZM1.498 4.53711C1.79506 4.53711 2.08546 4.62302 2.33246 4.78398C2.57947 4.94494 2.77198 5.17372 2.88567 5.44138C2.99935 5.70905 3.02909 6.00358 2.97114 6.28773C2.91318 6.57188 2.77013 6.83289 2.56007 7.03775C2.35001 7.24262 2.08238 7.38213 1.79102 7.43865C1.49966 7.49517 1.19766 7.46616 0.923205 7.35529C0.64875 7.24442 0.414169 7.05667 0.249127 6.81578C0.0840845 6.57488 -0.00400642 6.29167 -0.00400641 6.00195C-0.00400639 5.61345 0.15424 5.24086 0.43592 4.96615C0.7176 4.69144 1.09964 4.53711 1.498 4.53711Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium border-r text-gray-500 text-[12px] whitespace-nowrap"
              >
                <span className="text-NavColor">4 March 2023</span>
                <p>10:03 PM</p>
              </th>
              <td className="px-6 py-4 text-[12px] border-r">ABC Company</td>
              <td className="px-6 py-4 text-sm border-r">1.0</td>
              <td className="px-6 py-4 text-sm border-r">/loremipsumAPI/</td>
              <td className="px-6 py-4 text-sm border-r">POST</td>
              <td className="px-12 py-4 border-r">
                <svg
                  width="40"
                  height="20"
                  viewBox="0 0 40 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="20" rx="10" fill="#6B7280" />
                  <path
                    d="M16.4346 10.4658V11.4033H11.3076L11.2686 10.6953L14.335 5.89062H15.2773L14.2568 7.63867L12.4941 10.4658H16.4346ZM15.5459 5.89062V13H14.3691V5.89062H15.5459ZM21.8545 8.84961V10.0117C21.8545 10.5684 21.7992 11.0436 21.6885 11.4375C21.5811 11.8281 21.4248 12.1455 21.2197 12.3896C21.0146 12.6338 20.7689 12.8128 20.4824 12.9268C20.1992 13.0407 19.8818 13.0977 19.5303 13.0977C19.2503 13.0977 18.9899 13.0618 18.749 12.9902C18.5114 12.9186 18.2965 12.8063 18.1045 12.6533C17.9124 12.5003 17.748 12.3034 17.6113 12.0625C17.4779 11.8184 17.3737 11.527 17.2988 11.1885C17.2272 10.8499 17.1914 10.4577 17.1914 10.0117V8.84961C17.1914 8.28971 17.2467 7.81771 17.3574 7.43359C17.4681 7.04622 17.626 6.7321 17.8311 6.49121C18.0361 6.24707 18.2803 6.06966 18.5635 5.95898C18.8499 5.84831 19.1689 5.79297 19.5205 5.79297C19.8037 5.79297 20.0641 5.82878 20.3018 5.90039C20.5426 5.96875 20.7575 6.0778 20.9463 6.22754C21.1383 6.37728 21.3011 6.57259 21.4346 6.81348C21.5713 7.05111 21.6755 7.33919 21.7471 7.67773C21.8187 8.01302 21.8545 8.40365 21.8545 8.84961ZM20.6777 10.1777V8.67383C20.6777 8.39062 20.6615 8.1416 20.6289 7.92676C20.5964 7.70866 20.5475 7.52474 20.4824 7.375C20.4206 7.22201 20.3424 7.09831 20.248 7.00391C20.1536 6.90625 20.0462 6.83626 19.9258 6.79395C19.8053 6.74837 19.6702 6.72559 19.5205 6.72559C19.3382 6.72559 19.1755 6.76139 19.0322 6.83301C18.889 6.90137 18.7686 7.01204 18.6709 7.16504C18.5732 7.31803 18.4984 7.51986 18.4463 7.77051C18.3975 8.0179 18.373 8.31901 18.373 8.67383V10.1777C18.373 10.4642 18.3893 10.7165 18.4219 10.9346C18.4544 11.1527 18.5033 11.3398 18.5684 11.4961C18.6335 11.6491 18.7116 11.776 18.8027 11.877C18.8971 11.9746 19.0046 12.0462 19.125 12.0918C19.2487 12.1374 19.3838 12.1602 19.5303 12.1602C19.7158 12.1602 19.8802 12.1243 20.0234 12.0527C20.1667 11.9811 20.2871 11.8672 20.3848 11.7109C20.4824 11.5514 20.5557 11.3447 20.6045 11.0908C20.6533 10.8369 20.6777 10.5326 20.6777 10.1777ZM24.2861 8.91309H24.9893C25.2627 8.91309 25.4889 8.86589 25.668 8.77148C25.8503 8.67708 25.9854 8.54688 26.0732 8.38086C26.1611 8.21484 26.2051 8.02441 26.2051 7.80957C26.2051 7.58496 26.1644 7.3929 26.083 7.2334C26.0049 7.07064 25.8844 6.94531 25.7217 6.85742C25.5622 6.76953 25.3587 6.72559 25.1113 6.72559C24.903 6.72559 24.7142 6.7679 24.5449 6.85254C24.3789 6.93392 24.2471 7.05111 24.1494 7.2041C24.0518 7.35384 24.0029 7.53288 24.0029 7.74121H22.8213C22.8213 7.36361 22.9206 7.02832 23.1191 6.73535C23.3177 6.44238 23.5879 6.21289 23.9297 6.04688C24.2747 5.8776 24.6621 5.79297 25.0918 5.79297C25.5508 5.79297 25.9512 5.86947 26.293 6.02246C26.638 6.1722 26.9066 6.39681 27.0986 6.69629C27.2907 6.99577 27.3867 7.36686 27.3867 7.80957C27.3867 8.01139 27.3395 8.21647 27.2451 8.4248C27.1507 8.63314 27.0107 8.82357 26.8252 8.99609C26.6396 9.16536 26.4085 9.30371 26.1318 9.41113C25.8551 9.5153 25.5345 9.56738 25.1699 9.56738H24.2861V8.91309ZM24.2861 9.83105V9.18652H25.1699C25.5866 9.18652 25.9414 9.23535 26.2344 9.33301C26.5306 9.43066 26.7715 9.56576 26.957 9.73828C27.1426 9.90755 27.2777 10.1012 27.3623 10.3193C27.4502 10.5374 27.4941 10.7686 27.4941 11.0127C27.4941 11.3447 27.4339 11.641 27.3135 11.9014C27.1963 12.1585 27.0286 12.3766 26.8105 12.5557C26.5924 12.7347 26.3369 12.8698 26.0439 12.9609C25.7542 13.0521 25.4385 13.0977 25.0967 13.0977C24.7907 13.0977 24.4977 13.0553 24.2178 12.9707C23.9378 12.8861 23.6872 12.7607 23.4658 12.5947C23.2445 12.4255 23.0687 12.2155 22.9385 11.9648C22.8115 11.7109 22.748 11.418 22.748 11.0859H23.9248C23.9248 11.2975 23.9736 11.4847 24.0713 11.6475C24.1722 11.807 24.3122 11.9323 24.4912 12.0234C24.6735 12.1146 24.8818 12.1602 25.1162 12.1602C25.3636 12.1602 25.5768 12.1162 25.7559 12.0283C25.9349 11.9404 26.0716 11.8102 26.166 11.6377C26.2637 11.4652 26.3125 11.2568 26.3125 11.0127C26.3125 10.736 26.2588 10.5114 26.1514 10.3389C26.0439 10.1663 25.891 10.0394 25.6924 9.95801C25.4938 9.87337 25.2594 9.83105 24.9893 9.83105H24.2861Z"
                    fill="white"
                  />
                </svg>
              </td>
              <td className="px-6 py-4 text-sm border-r">124 ms</td>
              <td className="px-6 py-4 text-sm border-r">
                <svg
                  width="3"
                  height="12"
                  viewBox="0 0 3 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.498 -6.56547e-08C1.79506 -5.26694e-08 2.08546 0.0859115 2.33246 0.246871C2.57947 0.40783 2.77198 0.636607 2.88567 0.904272C2.99935 1.17194 3.02909 1.46647 2.97114 1.75062C2.91318 2.03477 2.77013 2.29578 2.56007 2.50064C2.35001 2.70551 2.08238 2.84502 1.79102 2.90154C1.49966 2.95806 1.19766 2.92905 0.923205 2.81818C0.64875 2.70731 0.414169 2.51956 0.249127 2.27867C0.0840847 2.03777 -0.00400622 1.75456 -0.00400621 1.46484C-0.00400619 1.07634 0.15424 0.703754 0.43592 0.429043C0.7176 0.154331 1.09964 -8.30673e-08 1.498 -6.56547e-08ZM1.498 9.0752C1.79506 9.0752 2.08546 9.16111 2.33246 9.32207C2.57947 9.48302 2.77198 9.7118 2.88567 9.97947C2.99935 10.2471 3.02909 10.5417 2.97114 10.8258C2.91318 11.11 2.77013 11.371 2.56007 11.5758C2.35001 11.7807 2.08238 11.9202 1.79102 11.9767C1.49966 12.0333 1.19766 12.0042 0.923204 11.8934C0.648749 11.7825 0.414169 11.5948 0.249126 11.3539C0.0840843 11.113 -0.00400662 10.8298 -0.00400661 10.54C-0.00400659 10.1515 0.15424 9.77895 0.43592 9.50424C0.7176 9.22953 1.09964 9.0752 1.498 9.0752ZM1.498 4.53711C1.79506 4.53711 2.08546 4.62302 2.33246 4.78398C2.57947 4.94494 2.77198 5.17372 2.88567 5.44138C2.99935 5.70905 3.02909 6.00358 2.97114 6.28773C2.91318 6.57188 2.77013 6.83289 2.56007 7.03775C2.35001 7.24262 2.08238 7.38213 1.79102 7.43865C1.49966 7.49517 1.19766 7.46616 0.923205 7.35529C0.64875 7.24442 0.414169 7.05667 0.249127 6.81578C0.0840845 6.57488 -0.00400642 6.29167 -0.00400641 6.00195C-0.00400639 5.61345 0.15424 5.24086 0.43592 4.96615C0.7176 4.69144 1.09964 4.53711 1.498 4.53711Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium border-r text-gray-500 text-[12px] whitespace-nowrap"
              >
                <span className="text-NavColor">4 March 2023</span>
                <p>10:03 PM</p>
              </th>
              <td className="px-6 py-4 text-[12px] border-r">ABC Company</td>
              <td className="px-6 py-4 text-sm border-r">1.0</td>
              <td className="px-6 py-4 text-sm border-r">/loremipsumAPI/</td>
              <td className="px-6 py-4 text-sm border-r">POST</td>
              <td className="px-12 py-4 border-r">
                <svg
                  width="40"
                  height="20"
                  viewBox="0 0 40 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="20" rx="10" fill="#6B7280" />
                  <path
                    d="M16.4346 10.4658V11.4033H11.3076L11.2686 10.6953L14.335 5.89062H15.2773L14.2568 7.63867L12.4941 10.4658H16.4346ZM15.5459 5.89062V13H14.3691V5.89062H15.5459ZM21.8545 8.84961V10.0117C21.8545 10.5684 21.7992 11.0436 21.6885 11.4375C21.5811 11.8281 21.4248 12.1455 21.2197 12.3896C21.0146 12.6338 20.7689 12.8128 20.4824 12.9268C20.1992 13.0407 19.8818 13.0977 19.5303 13.0977C19.2503 13.0977 18.9899 13.0618 18.749 12.9902C18.5114 12.9186 18.2965 12.8063 18.1045 12.6533C17.9124 12.5003 17.748 12.3034 17.6113 12.0625C17.4779 11.8184 17.3737 11.527 17.2988 11.1885C17.2272 10.8499 17.1914 10.4577 17.1914 10.0117V8.84961C17.1914 8.28971 17.2467 7.81771 17.3574 7.43359C17.4681 7.04622 17.626 6.7321 17.8311 6.49121C18.0361 6.24707 18.2803 6.06966 18.5635 5.95898C18.8499 5.84831 19.1689 5.79297 19.5205 5.79297C19.8037 5.79297 20.0641 5.82878 20.3018 5.90039C20.5426 5.96875 20.7575 6.0778 20.9463 6.22754C21.1383 6.37728 21.3011 6.57259 21.4346 6.81348C21.5713 7.05111 21.6755 7.33919 21.7471 7.67773C21.8187 8.01302 21.8545 8.40365 21.8545 8.84961ZM20.6777 10.1777V8.67383C20.6777 8.39062 20.6615 8.1416 20.6289 7.92676C20.5964 7.70866 20.5475 7.52474 20.4824 7.375C20.4206 7.22201 20.3424 7.09831 20.248 7.00391C20.1536 6.90625 20.0462 6.83626 19.9258 6.79395C19.8053 6.74837 19.6702 6.72559 19.5205 6.72559C19.3382 6.72559 19.1755 6.76139 19.0322 6.83301C18.889 6.90137 18.7686 7.01204 18.6709 7.16504C18.5732 7.31803 18.4984 7.51986 18.4463 7.77051C18.3975 8.0179 18.373 8.31901 18.373 8.67383V10.1777C18.373 10.4642 18.3893 10.7165 18.4219 10.9346C18.4544 11.1527 18.5033 11.3398 18.5684 11.4961C18.6335 11.6491 18.7116 11.776 18.8027 11.877C18.8971 11.9746 19.0046 12.0462 19.125 12.0918C19.2487 12.1374 19.3838 12.1602 19.5303 12.1602C19.7158 12.1602 19.8802 12.1243 20.0234 12.0527C20.1667 11.9811 20.2871 11.8672 20.3848 11.7109C20.4824 11.5514 20.5557 11.3447 20.6045 11.0908C20.6533 10.8369 20.6777 10.5326 20.6777 10.1777ZM24.2861 8.91309H24.9893C25.2627 8.91309 25.4889 8.86589 25.668 8.77148C25.8503 8.67708 25.9854 8.54688 26.0732 8.38086C26.1611 8.21484 26.2051 8.02441 26.2051 7.80957C26.2051 7.58496 26.1644 7.3929 26.083 7.2334C26.0049 7.07064 25.8844 6.94531 25.7217 6.85742C25.5622 6.76953 25.3587 6.72559 25.1113 6.72559C24.903 6.72559 24.7142 6.7679 24.5449 6.85254C24.3789 6.93392 24.2471 7.05111 24.1494 7.2041C24.0518 7.35384 24.0029 7.53288 24.0029 7.74121H22.8213C22.8213 7.36361 22.9206 7.02832 23.1191 6.73535C23.3177 6.44238 23.5879 6.21289 23.9297 6.04688C24.2747 5.8776 24.6621 5.79297 25.0918 5.79297C25.5508 5.79297 25.9512 5.86947 26.293 6.02246C26.638 6.1722 26.9066 6.39681 27.0986 6.69629C27.2907 6.99577 27.3867 7.36686 27.3867 7.80957C27.3867 8.01139 27.3395 8.21647 27.2451 8.4248C27.1507 8.63314 27.0107 8.82357 26.8252 8.99609C26.6396 9.16536 26.4085 9.30371 26.1318 9.41113C25.8551 9.5153 25.5345 9.56738 25.1699 9.56738H24.2861V8.91309ZM24.2861 9.83105V9.18652H25.1699C25.5866 9.18652 25.9414 9.23535 26.2344 9.33301C26.5306 9.43066 26.7715 9.56576 26.957 9.73828C27.1426 9.90755 27.2777 10.1012 27.3623 10.3193C27.4502 10.5374 27.4941 10.7686 27.4941 11.0127C27.4941 11.3447 27.4339 11.641 27.3135 11.9014C27.1963 12.1585 27.0286 12.3766 26.8105 12.5557C26.5924 12.7347 26.3369 12.8698 26.0439 12.9609C25.7542 13.0521 25.4385 13.0977 25.0967 13.0977C24.7907 13.0977 24.4977 13.0553 24.2178 12.9707C23.9378 12.8861 23.6872 12.7607 23.4658 12.5947C23.2445 12.4255 23.0687 12.2155 22.9385 11.9648C22.8115 11.7109 22.748 11.418 22.748 11.0859H23.9248C23.9248 11.2975 23.9736 11.4847 24.0713 11.6475C24.1722 11.807 24.3122 11.9323 24.4912 12.0234C24.6735 12.1146 24.8818 12.1602 25.1162 12.1602C25.3636 12.1602 25.5768 12.1162 25.7559 12.0283C25.9349 11.9404 26.0716 11.8102 26.166 11.6377C26.2637 11.4652 26.3125 11.2568 26.3125 11.0127C26.3125 10.736 26.2588 10.5114 26.1514 10.3389C26.0439 10.1663 25.891 10.0394 25.6924 9.95801C25.4938 9.87337 25.2594 9.83105 24.9893 9.83105H24.2861Z"
                    fill="white"
                  />
                </svg>
              </td>
              <td className="px-6 py-4 text-sm border-r">124 ms</td>
              <td className="px-6 py-4 text-sm border-r">
                <svg
                  width="3"
                  height="12"
                  viewBox="0 0 3 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.498 -6.56547e-08C1.79506 -5.26694e-08 2.08546 0.0859115 2.33246 0.246871C2.57947 0.40783 2.77198 0.636607 2.88567 0.904272C2.99935 1.17194 3.02909 1.46647 2.97114 1.75062C2.91318 2.03477 2.77013 2.29578 2.56007 2.50064C2.35001 2.70551 2.08238 2.84502 1.79102 2.90154C1.49966 2.95806 1.19766 2.92905 0.923205 2.81818C0.64875 2.70731 0.414169 2.51956 0.249127 2.27867C0.0840847 2.03777 -0.00400622 1.75456 -0.00400621 1.46484C-0.00400619 1.07634 0.15424 0.703754 0.43592 0.429043C0.7176 0.154331 1.09964 -8.30673e-08 1.498 -6.56547e-08ZM1.498 9.0752C1.79506 9.0752 2.08546 9.16111 2.33246 9.32207C2.57947 9.48302 2.77198 9.7118 2.88567 9.97947C2.99935 10.2471 3.02909 10.5417 2.97114 10.8258C2.91318 11.11 2.77013 11.371 2.56007 11.5758C2.35001 11.7807 2.08238 11.9202 1.79102 11.9767C1.49966 12.0333 1.19766 12.0042 0.923204 11.8934C0.648749 11.7825 0.414169 11.5948 0.249126 11.3539C0.0840843 11.113 -0.00400662 10.8298 -0.00400661 10.54C-0.00400659 10.1515 0.15424 9.77895 0.43592 9.50424C0.7176 9.22953 1.09964 9.0752 1.498 9.0752ZM1.498 4.53711C1.79506 4.53711 2.08546 4.62302 2.33246 4.78398C2.57947 4.94494 2.77198 5.17372 2.88567 5.44138C2.99935 5.70905 3.02909 6.00358 2.97114 6.28773C2.91318 6.57188 2.77013 6.83289 2.56007 7.03775C2.35001 7.24262 2.08238 7.38213 1.79102 7.43865C1.49966 7.49517 1.19766 7.46616 0.923205 7.35529C0.64875 7.24442 0.414169 7.05667 0.249127 6.81578C0.0840845 6.57488 -0.00400642 6.29167 -0.00400641 6.00195C-0.00400639 5.61345 0.15424 5.24086 0.43592 4.96615C0.7176 4.69144 1.09964 4.53711 1.498 4.53711Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsTable;
