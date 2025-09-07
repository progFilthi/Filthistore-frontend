import AudioUpload from "@/components/audio-upload";
import FormUpload from "@/components/form-upload";
import ImageUpload from "@/components/image-upload";
import React from "react";

export default function page() {
  return (
    <div className="space-y-8">
      <ImageUpload />
      <AudioUpload />
      <FormUpload />
    </div>
  );
}
