import { NFTStorage } from "nft.storage";
export { KvstoreView } from './KvstoreView';
export { CustomConnectButton } from './CustomConnectButton';
export type Key = {
    publicKey: string;
    privateKey: string;
};
export const client = new NFTStorage({
    token: process.env.REACT_APP_NFT_STORAGE_API as string
});