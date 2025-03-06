"use client";

import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

const RoomMembers = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-64 h-96 text-center bg-(--background) rounded-xl">
      <div className="top flex justify-between items-center m-4">
        <h1 className="font-bold text-(--black)">Room Members</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full border size-8 flex items-center justify-center cursor-pointer"
        >
          <Plus className="text-[#41AE87] border-[#E6E6E6]" />
        </button>
      </div>
      <div className="bottom">
        <div className="ranks m-6 space-y-2 overflow-y-auto">
          <div className="h-64 overflow-y-auto p-4 rounded-lg shadow-md">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="player flex items-center mb-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="ml-2 text-gray-800">Player {i + 1}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Need to add a way to copy a link and use it as a invitation link also give it styling */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/50">
          <div className="bg-(--background) p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold">Popup Title</h2>
            <p className="mt-2 text-gray-600">This is a popup content.</p>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default RoomMembers;
