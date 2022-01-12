

import ChainCall from "./ChainCall";
function DisplayToken(props) {
    var TokenAddr = ChainCall("returnTokenAddress");
    var link = "https://rinkeby.etherscan.io/token/"+TokenAddr
    return (

        <div >
            <h1>
                Your Payment Has Been Processed &#9989;
            </h1>
            <br>
            </br>
            <h3>
                Following are your token details. 
            </h3>
            <h3>
            Take a screenshot or save these details somewhere.
            </h3>
 
            <h4>
            Take view your tokens open Metamask and click import tokens and enter your token address.

            </h4>
            <br></br>
            <div className ="displyboxaddr">
                Token Name : {props.name}
            </div>
            <br>
            </br><br></br>
            <div className ="displyboxaddr">
                Token Symbol : {props.symbol}
            </div>

            <br>
            </br><br></br>
            <div className ="displyboxaddr">
                Total Supply : {props.supply}
            </div>
            <br></br><br></br>
            <div className ="displyboxaddr" id="addr">
                Token Address : {TokenAddr}
            </div>
            <br></br><br></br>
            <div className ="displybox">
                
           <a href={link} target="_blank">Ether Scan Link</a>
            </div>

            </div>
      
    )
}

export default DisplayToken