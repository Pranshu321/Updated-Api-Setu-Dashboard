import React from "react";

const Button = ({ text }) => {
  return (
    <div className="px-2 text-center lg:px-4 py-1 text-sm border-2 border-gray-300 rounded-md">
      {text}
    </div>
  );
};

export default Button;
