'use client'
import { useWallet, useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { Idl } from "@project-serum/anchor";
import {Program, AnchorProvider, setProvider} from '@coral-xyz/anchor'
import { ProgramId,battleCoin } from "./Constant";
import idl from './battlecoin.json'
import {PublicKey} from '@solana/web3.js'
const idlstring =JSON.stringify(idl);
  const idlObject =JSON.parse(idlstring);

export const getProgram = () => {
  const wallet = useAnchorWallet();
  const {connection}=useConnection();


  const getprovider = () => {
    if (!wallet) {
      return null;
    }

    const prvdr = new AnchorProvider(connection , wallet, AnchorProvider.defaultOptions() );
    setProvider(prvdr);
    return prvdr;
  };

  const programId = new PublicKey(ProgramId);
  const Achorprovider = getprovider();


  return Achorprovider;

};
