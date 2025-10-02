import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-2xl">
        Payments <span className="text-red-400">failed</span>
      </p>
      <p>Please contact the developer!</p>
    </div>
  );
}
