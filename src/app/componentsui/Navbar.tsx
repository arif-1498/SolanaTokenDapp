"use client";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left spacer */}
        <div className="flex-1"></div>

        {/* Company Name */}
        <div className="text-center text-lg font-bold flex-1">
          Solan SPl Token Ecosystem
        </div>

        {/* Button */}
        <div className="flex-1 flex justify-end">
          <WalletMultiButton/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
