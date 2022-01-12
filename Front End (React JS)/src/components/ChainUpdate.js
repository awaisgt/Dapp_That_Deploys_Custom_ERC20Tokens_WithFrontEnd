import { ethers } from "ethers";
import { useContractFunction  } from "@usedapp/core";
import contractAbi from "../contractAbi/abi.json";
import { Contract } from "@ethersproject/contracts";


  
const contractInterface = new ethers.utils.Interface(contractAbi);
const contractAddress = "0xEfe479713e2d887C12053e2b6c528c395346514c";
const contract = new Contract(contractAddress, contractInterface);


export function useChainUpdate(methodName) {
  
  const { state, send } = useContractFunction(contract,methodName,{transactionName:methodName});
  return { state, send };
}

export default useChainUpdate;