import {} from '@solana/web3.js';
import {} from '@solana/wallet-adapter-wallets';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <header className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800">My Solana dApp</h1>
      <p className="text-gray-500">Interact with the blockchain seamlessly.</p>
    </header>

    
    <div className="mb-6">
      <button 
        className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">
        Connect Wallet
      </button>
    </div>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button 
        className="py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition">
        Mint Tokens
      </button>
      <button 
        className="py-3 px-6 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 transition">
        Transfer Tokens
      </button>
    </div>

    
    <div className="mt-8 text-center text-gray-600">
      <p><span className="font-bold">Wallet Address:</span> 0x0000...0000</p>
      <p><span className="font-bold">Balance:</span> 0 SOL</p>
    </div>
  </div>
</div>

  );
}
