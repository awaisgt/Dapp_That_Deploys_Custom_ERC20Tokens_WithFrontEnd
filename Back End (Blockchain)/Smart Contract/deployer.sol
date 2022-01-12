// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
        constructor ( uint256 initialSupply,string memory tokenName, string memory tokenSymbol) ERC20(tokenName,tokenSymbol) {

            _mint(msg.sender,(initialSupply*10**18));
        }
}

 contract MainDeploymentContract {

  
    ERC20Token public ERC20TOKEN;
    uint256 TOKEN_COUNTER = 0;
    address[] TOKENS_CREATED;


    function createNewToken(uint256 _initialsupply, string memory _tokenName , string memory _tokenSymbol) public {
        ERC20TOKEN = new ERC20Token(_initialsupply,_tokenName,_tokenSymbol);
        TOKENS_CREATED.push(address(ERC20TOKEN));
        TOKEN_COUNTER +=1;
        uint256 total_supply = _initialsupply*10**18;
        ERC20TOKEN.transfer(msg.sender,total_supply);
    }


    function returnTokenAddress() public view returns(address){
    return TOKENS_CREATED[TOKEN_COUNTER-1];
    }


}


