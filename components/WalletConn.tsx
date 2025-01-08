'use client';

import dynamic from "next/dynamic";
const Walletbuttondynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);
import { useWallet } from "@solana/wallet-adapter-react";
const WalletConn = () => {

    const wallet =useWallet();
    console.log(wallet.publicKey);
  return (
    <div className="flex justify-between p-4 border bg-gray-300">
      <div className="flex items-center space-x-4'">
        <div>

        <Walletbuttondynamic>{wallet.publicKey?`${wallet.publicKey.toBase58().substring(0, 7)}...`:`connect wallet`}</Walletbuttondynamic>
        </div>
      </div>
    </div>
  );
};

export default WalletConn
