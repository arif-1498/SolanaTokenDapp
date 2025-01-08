'use client';
import React, {useMemo} from  'react'
import {PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import{ConnectionProvider, WalletProvider as SolanaWalletProvider, WalletProviderProps} from '@solana/wallet-adapter-react';
import  {WalletModal, WalletModalProvider, WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import {clusterApiUrl} from '@solana/web3.js'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';


const WalletContextProvider=({children }:{children: React.ReactNode})=>{

    const network =WalletAdapterNetwork.Devnet;
    const endpoint=clusterApiUrl(network);

    const wallets= useMemo(()=>[new PhantomWalletAdapter, 
    ], []);
    
return(
    <ConnectionProvider endpoint={endpoint}>
        <SolanaWalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                {children }
            </WalletModalProvider>
        </SolanaWalletProvider>
    </ConnectionProvider>
)


}

export default WalletContextProvider;