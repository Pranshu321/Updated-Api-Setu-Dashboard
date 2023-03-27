import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="w-52 rounded-md shadow-lg">
        <img
          className="w-full"
          src="https://user-images.githubusercontent.com/86917304/227922052-470ee1d5-158a-44f7-9ea5-8c11216f2e29.png"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-2">
          <p className="text-[#374151] text-sm">
            Beginner guide for API Setu - Learn all the basic in this easy to
            follow video guide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
