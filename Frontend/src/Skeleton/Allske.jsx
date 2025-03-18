import React from "react";
import IdSkeleton from "./IdSkeleton";
import Skeleton from "./Skeleton";
import LinkSkeleton from "./LinkSkeleton";
import QrCodeSke from "./QrCodeSke";

const Allske = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full">
 
      <div className="w-full md:w-auto">
        <Skeleton />
      </div>

    
      <div className="flex flex-col  w-full md:w-auto">
        <IdSkeleton />
        <LinkSkeleton />
        <QrCodeSke />
      </div>
    </div>
  );
};

export default Allske;