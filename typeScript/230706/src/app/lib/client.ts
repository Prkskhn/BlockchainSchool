// import { MetaMaskSDK } from "@metamask/sdk";
// import Web3, { Personal } from "web3";

// export const web3 = new Web3(window.ethereum);
// export const personal = new Personal(window.ethereum);
import Web3, { Personal } from "web3";

let web3;
let personal;

if (typeof window !== "undefined") {
  web3 = new Web3(window.ethereum);
  personal = new Personal(window.ethereum);
}

export { web3, personal };
