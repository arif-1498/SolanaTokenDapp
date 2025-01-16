"use client";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

export default function Home() {
  const name ="hello this rendering twice";
  console.log( name);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-80">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Get Your Airdrop
          </h1>
        </div>
      </div>
    </>
  );
}
