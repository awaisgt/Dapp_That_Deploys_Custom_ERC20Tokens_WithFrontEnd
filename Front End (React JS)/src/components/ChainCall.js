import { ethers } from "ethers";
import { useContractCall } from "@usedapp/core";
import contractAbi from "../contractAbi/abi.json";
const contractInterface = new ethers.utils.Interface(contractAbi);
const contractAddress = "0xEfe479713e2d887C12053e2b6c528c395346514c";

 function ChainCall(functionName) {
  const [returnVal]= useContractCall({
    abi: contractInterface,
    address: contractAddress,
    method: functionName,
    args: [],
  }) ?? [];
  return returnVal;
}

export default ChainCall;