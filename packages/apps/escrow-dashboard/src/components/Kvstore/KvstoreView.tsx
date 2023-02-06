import React,{useState,useEffect} from 'react';
import { MainPage } from './MainPage';
import { AfterConnect } from './AfterConnect';
import { Dashboard } from './Dashboard';
import { useAccount, useContractRead} from 'wagmi';
import KVStore from "@human-protocol/core/abis/KVStore.json";

export const KvstoreView = (): React.ReactElement => {
  const { isConnected,address } = useAccount();

  const { data,refetch } = useContractRead({
      address: process.env.REACT_APP_CONTRACT as string,
      abi: KVStore,
      functionName: 'get',
      args: [address, "public_key"],
  })
    const [publicKey,setPublicKey]=useState<string>(data as string)
  return (
    <>
      {!isConnected && <MainPage />}
    {isConnected &&  publicKey.trim().length === 0 && <AfterConnect />}
    {isConnected && publicKey.trim().length > 0  && <Dashboard publicKey={publicKey} refetch={refetch}/>}
    </>
  );
};
