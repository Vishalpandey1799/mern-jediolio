import { FiClipboard } from "react-icons/fi";
import { useState } from "react";
import toast from "react-hot-toast";
import Apicalls from "../store/apicalls.js";

const Link = () => {
  const [copied, setCopied] = useState(false);
  const { newSlug } = Apicalls();
  

  if (!newSlug) return;

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(`http://localhost:5173/user/portfolio/${newSlug}`)
      .then(() => {
        setCopied(true);
        toast.success("Link copied to clipboard! 🎉");
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Copy failed", error);
        toast.error("Failed to copy the link.");
      });
  };

  return (
    <div className="flex flex-col p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-w-sm mx-auto w-[280px] h-[160px] text-white">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">Copy to Clipboard</span>
        <button
          onClick={handleCopyClick}
          className={`p-2 rounded-lg transition-all duration-200 ${
            copied ? "bg-green-500" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          <FiClipboard
            className={`text-xl transition-all duration-200 ${
              copied ? "text-white" : "text-gray-300"
            }`}
          />
        </button>
      </div>

      <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded-lg">
        <p className="text-sm break-all">{`http://localhost:5173/user/portfolio/${newSlug}`}</p>
        {copied && (
          <span className="text-xs text-green-400 animate-pulse">Copied!</span>
        )}
      </div>
    </div>
  );
};

export default Link;
