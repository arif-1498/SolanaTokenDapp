'use client';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";

//import dynamic from "next/dynamic";
//const Walletbuttondynamic = dynamic(
 // async () =>
   // (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
//  { ssr: false }
//);
import { useWallet} from "@solana/wallet-adapter-react";
const WalletConn = () => {

    const { select, connect, disconnect, publicKey }=useWallet();
    select(PhantomWalletName);
    console.log(publicKey);
  return (
    <div className="flex justify-between p-4 border bg-gray-300">
      <div className="flex items-center space-x-4'">
        <div>
          <button onClick={connect}>connect wallet</button>

        <WalletMultiButton></WalletMultiButton>
        </div>
      </div>
    </div>
  );
};

export default WalletConn
