import React from "react";

export default function Jumbotron() {
  return (
    <div className="p-12 bg-[#839292] rounded-2xl mx-4">
      {/* Title and Profile Picture */}
      <div className="flex justify-between items-center mt-10">
        <p className="text-8xl tracking-tighter">Deekshith Dade</p>
        <div className="w-32 h-32 rounded-full bg-black"></div>
      </div>

      {/* Details */}
      <div className="flex justify-between items-center">
        <div className="flex">
        <div className="flex">
          <p>Support Manager</p>
          <p>Arrow</p>
        </div>
        <p>Art Director - Metro Lab</p>
        </div>
        <div>
          <p>Send Donation</p>
        </div>
      </div>
    </div>
  );
}
