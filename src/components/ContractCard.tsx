"use client";

import React, { useState } from "react";
import { ClipboardCopy } from "lucide-react";

interface ContractCardProps {
  address: string;
}

const ContractCard: React.FC<ContractCardProps> = ({ address }) => {
  const [showAlert, setShowAlert] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      {showAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
            <div className="flex justify-center items-center whitespace-nowrap">
              Address copied to clipboard!
            </div>
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto p-6 border border-zinc-700 bg-gray-800 rounded-3xl">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">KT</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">Contract Address</h1>
        </div>

        <div className="bg-gray-700 border border-zinc-600 rounded-xl p-4">
          <p className="text-gray-300 text-sm text-left">TON Address</p>
          <div className="flex items-center justify-between gap-2">
            <p className="text-white font-mono text break-all">{address}</p>
            <button
              onClick={copyToClipboard}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Copy address to clipboard"
            >
              <ClipboardCopy className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractCard;
