"use client";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import Navbar from "./componentsui/Navbar";

export default function Home() {
  const name = "hello this rendering twice";
  console.log(name);

return (
  
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <h1 className="text-3xl font-bold text-blue-500">Sol token Airdrop</h1>
  <div className="flex items-center space-x-4 mt-4">
    <input
      type="text"
      placeholder="Enter text here"
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 ease-in-out"
    />
    <button onClick={()=>{alert("Token transfer to your account")}} className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 rounded-lg shadow-md transition duration-300 ease-in-out">
      Get Sol
    </button>
  </div>
</div>
)

}