import React, { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import Apicalls from "../store/apicalls";

const UserId = () => {
  const { userData } = Apicalls();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!userData?._id) return; // Ensure userData._id exists

    navigator.clipboard
      .writeText(userData._id)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => alert("Failed to copy"));
  };

  // If userData is not available, render nothing
  if (!userData) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-3 p-5 border border-gray-700 bg-gray-800 text-white rounded-xl shadow-md w-[280px] h-[120px]">
      <div className="flex items-center justify-between w-full">
        <span className="text-sm font-semibold text-gray-300">User ID</span>
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all"
        >
          <FiClipboard className="text-white text-lg" />
        </button>
      </div>

      <div className="flex items-center justify-center w-full bg-gray-700 p-3 rounded-lg">
        <span className="text-sm truncate">{userData._id}</span>
        {copied && (
          <span className="text-xs text-green-400 ml-2 animate-pulse">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
};

export default UserId;