import DisplayToken from "./DisplayToken";
import React, { useState } from "react";

import "../App.css";

import useChainUpdate from "./ChainUpdate";
import { useEtherBalance, useEthers, useNotifications } from "@usedapp/core";

function CreateToken() {
  const { account } = useEthers();
  const [flagIsActive, setflagIsActive] = useState(true);
  const { state: newtokenstate, send: newtoken } = useChainUpdate(
    "createNewToken"
  );
  const [tokname, setTokname] = useState("");
  const [toksym, setToksym] = useState("");
  const [toksup, setToksup] = useState("");
  const isTokenCreated = newtokenstate.status == "Success";
  const isMining = newtokenstate.status == "Mining";
  var check = isTokenCreated;
  const isConnected = account !== undefined;

  const handlenewtoken = () => {
    var totalSupply = document.getElementById("totalsupply").value;
    var tokenname = document.getElementById("tokenname").value;
    var tokensymbol = document.getElementById("tokensymbol").value;

    if (
      tokensymbol.length > 0 &&
      tokenname.length > 0 &&
      totalSupply.length > 0
    ) {
      setTokname(tokenname);
      setToksym(tokensymbol);
      setToksup(totalSupply);
      newtoken(totalSupply, tokenname, tokensymbol);
    }
  };

  return (
    <div>
      {isTokenCreated ? (
        <div>
          <div>
            <DisplayToken
              name={tokname}
              symbol={toksym}
              supply={toksup}
            ></DisplayToken>
          </div>
        </div>
      ) : (
        <div className="form">
          <div>
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your first ERC20 token!</div>
            <div className="input-container ic1">
              <input
                id="tokenname"
                className="input"
                type="text"
                placeholder="Token Name e.g Ethereum "
              ></input>
              <div className="cut"></div>
            </div>
            <div className="input-container ic2">
              <input
                id="tokensymbol"
                className="input"
                type="text"
                placeholder="Token Symbol e.g Eth "
              ></input>

              <div className="cut"></div>
            </div>
            <div className="input-container ic2">
              <input
                id="totalsupply"
                className="input"
                type="number"
                min="1"
                placeholder="Initial Supply e.g 1000000"
              ></input>
              <div className="cut cut-short"></div>
            </div>
            {isConnected ? (
              <div>
                {isMining ? (
                  <button
                    type="text"
                    className="disbaledsubmit"
                    onClick={handlenewtoken}
                    disabled={true}
                  >
                    submit
                  </button>
                ) : (
                  <button
                    type="text"
                    className="submit"
                    onClick={handlenewtoken}
                  >
                    submit
                  </button>
                )}
              </div>
            ) : (
              <div>
                <button
                  type="text"
                  className="disbaledsubmit"
                  onClick={handlenewtoken}
                  disabled={true}
                >
                  submit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateToken;
