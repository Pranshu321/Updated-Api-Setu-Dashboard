import React from "react";
import Button from "./Button";

const LowerTags = () => {
  return (
    <div className="flex flex-col mx-6 gap-y-3 mt-3">
      <div className="text-base text-NavColor font-semibold">Quick Links</div>
      <div className="flex lg:flex-row flex-col gap-4">
        <Button text={"Help Guides"} />
        <Button text={"Tutorial Videos"} />
        <Button text={"Support Center"} />
        <Button text={"Community Forum"} />
        <Button text={"Manage Organization"} />
      </div>
    </div>
  );
};

export default LowerTags;
