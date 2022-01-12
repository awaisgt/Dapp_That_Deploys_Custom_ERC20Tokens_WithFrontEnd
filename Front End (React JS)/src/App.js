import "./App.css";

import { DAppProvider, ChainId } from "@usedapp/core";

import Connect from "./components/connect";
import CreateToken from "./components/createToken";
const config = {
  supportedChains: [ChainId.Rinkeby]
};

function App() {
  return (
    <DAppProvider config={{ supportedChains: [ChainId.Rinkeby] }}>
      <div className="App">
        <header className="App-header">
          <Connect></Connect>

          <CreateToken></CreateToken>
        </header>
      </div>
    </DAppProvider>
  );
}

export default App;
