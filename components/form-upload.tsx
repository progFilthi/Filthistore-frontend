import React from "react";
import TitleUpload from "./input-upload-title";
import UploadButton from "./upload-btn";
import PriceUpload from "./input-upload-price";
import BpmUpload from "./input-upload-bpm";
import KeyUpload from "./input-upload-key";

export default function FormUpload() {
  return (
    // className="flex gap-8"
    <form className="flex items-start flex-col my-16 space-y-8 w-full">
      <h1 className="text-lg">Fill up the beat metadata below!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
        <TitleUpload />
        <BpmUpload />
        <KeyUpload />
        <PriceUpload />
      </div>
      <div className="flex justify-center w-full mt-8">
        <UploadButton />
      </div>
    </form>
  );
}
