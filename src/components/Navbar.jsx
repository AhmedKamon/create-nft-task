import { ethers } from "ethers";
import { useState } from "react";
import LOGGO from "../utils/Logomark_1_.png";
import GLOVE from "../utils/Vector-3.png";

function Navbar() {
  const [hasWallet, setHasWallet] = useState(true);
  const [walletAddress, setWalletAddress] = useState("");
  async function requestAccounts() {
    console.log("request accounts");

    // matamask exist oor not ??
    if (window.ethereum) {
      console.log("detected");
      setHasWallet(true);
      alert("Connected with MEtaMask");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts, " all metamask accounts");
      } catch (error) {
        console.log("error connection");
      }
    } else {
      setHasWallet(false);
      alert(
        "no MetaMask found, try installing MetaMask extention or regular login"
      );
      console.log("no matamask");
    }
  }

  // provider for smart contract interactions

  // async function connectWallet() {
  //   if (typeof window.ethereum !== "undefined") {
  //     await requestAccounts();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   }
  // }

  return (
    <div className="h-20 bg-gradient-to-r from-[#0A8A97]  to-[#2ADBA7] flex items-center justify-between md:px-20 px-7">
      <div className="flex">
        <img src={LOGGO} alt="" className="w-7 h-7" />
        <h1 className="text-white font-bold ml-2">GREENTRADE</h1>
      </div>
      <div className="lg:flex space-x-7 text-white font-semibold hidden">
        <p>Home</p>
        <p>Marketplace</p>
        <p>Launchpad</p>
      </div>
      <div className="flex space-x-4">
        <div className=" hidden md:flex items-center space-x-2">
          <img className="w-7 h-7" src={GLOVE} alt="" />
          <h1 className=" text-white font-bold ">EN</h1>
        </div>
        {hasWallet ? (
          <button
            onClick={requestAccounts}
            className="bg-white text-[#2ADBA7] py-3 px-2 md:px-8 md:py-[10px] rounded-[8px] font-medium"
          >
            {walletAddress
              ? `Connected:${walletAddress.slice(0, 7)}...${walletAddress.slice(
                  35
                )}`
              : "connect wallet"}
          </button>
        ) : (
          <button className="bg-white text-[#2ADBA7] px-8 py-[10px] rounded-[8px] font-medium">
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
