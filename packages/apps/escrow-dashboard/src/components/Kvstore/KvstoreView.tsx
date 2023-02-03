import React from 'react';
import { MainPage } from './MainPage';
import { AfterConnect } from './AfterConnect';
import { Dashboard } from './Dashboard';
import { useAccount, useContractRead} from 'wagmi';
import KVStore from "@human-protocol/core/abis/KVStore.json";
export const KvstoreView = (): React.ReactElement => {
  const { isConnected,address } = useAccount();
  const { data } = useContractRead({
      address: process.env.REACT_APP_CONTRACT as string,
      abi: KVStore,
      functionName: 'get',
      args: [address, "public_key"],
  })

  return (
    <>
      {!isConnected && <MainPage />}
    {isConnected && !data && <AfterConnect />}
    {isConnected && data  && <Dashboard publicKey={data as string}/>}
    </>
  );
};
