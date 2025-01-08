'use client';
import React, {useMemo} from  'react'
import {SolflareWalletAdapter, BitgetWalletAdapter, PhantomWalletName, PhantomWalletAdapter}  from '@solana/wallet-adapter-wallets';
import{ConnectionProvider, WalletProvider, WalletProviderProps} from '@solana/wallet-adapter-react';
import  {WalletModal, WalletModalProvider, WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import {clusterApiUrl} from '@solana/web3.js'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';


const WalletContextProvider=({children }:{children: React.ReactNode})=>{

    const network =WalletAdapterNetwork.Devnet;
    const endpoint=clusterApiUrl(network);

    const wallets= useMemo(()=>[ new PhantomWalletAdapter
    ], []);
    
return(
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={false}>
            <WalletModalProvider>
                {children }
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
)


}

export default WalletContextProvider;