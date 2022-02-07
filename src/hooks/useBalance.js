import React, { useState, useEffect } from "react"
import { getContract } from "../utils/utils"
import { ethers } from "ethers"
import abi from "../utils/Abis/ABI.json"
import abi2 from "../utils/Abis/AB12.json"
import useAuth from "./useAuth"
import Fortmatic from 'fortmatic';
// import NFTContractBuild from 'contracts/NFT.json';
import Web3 from 'web3';

let selectedAccount;

// let nftContract;
let erc20Contract;

let isInitialized = false;

export const init = async () => {
	// let provider = window.ethereum;

    const fm = new Fortmatic('pk_test_C102027C0649EF66', 'kovan');
	let provider = fm.getProvider()
	const web3 = new Web3(provider);

	const networkId = await web3.eth.net.getId();

	// nftContract = new web3.eth.Contract(
	// 	NFTContractBuild.abi,
	// 	NFTContractBuild.networks[networkId].address
	// );

	
	erc20Contract = new web3.eth.Contract(
		abi,
		// Dai contract on Rinkeby
		'0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B'
	);

    console.log(erc20Contract)

	isInitialized = true;
};

export const getOwnBalance = async () => {
	if (!isInitialized) {
		await init();
	}

	return erc20Contract.methods
		.getContractTokenbalance("BTC")
		.call()
		.then((balance) => {
            console.log(balance)
			return Web3.utils.fromWei(balance);
		});
};

// export const mintToken = async () => {
// 	if (!isInitialized) {
// 		await init();
// 	}

// 	return nftContract.methods
// 		.mint(selectedAccount)
// 		.send({ from: selectedAccount });
// };