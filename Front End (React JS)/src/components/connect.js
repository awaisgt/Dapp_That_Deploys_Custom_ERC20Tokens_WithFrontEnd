import {
    useEtherBalance,
    useEthers , useNotifications } from "@usedapp/core";
    import { formatEther } from "@ethersproject/units";


  function Connect(){

    const { activateBrowserWallet, account , deactivate } = useEthers();
    const isConnected = account !== undefined
    const etherBalance = useEtherBalance(account);


    const function_check = () =>{
        activateBrowserWallet();
        
    }
    return (
        <div className="Buttons">



            {isConnected? 
        (<div></div>)
            :
            (<div >
        <button className = "submit" onClick={()=>activateBrowserWallet()}>Connect Your Wallet</button>

      </div>)}



      </div>
    )
  }
  export default Connect;