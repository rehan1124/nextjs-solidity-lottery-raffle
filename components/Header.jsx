import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { ConnectButton } from "@web3uikit/web3";
import { Information } from "@web3uikit/core";

const Header = () => {
  return (
    <>
      <h3>--- Raffle lottery game ---</h3>
      <ConnectButton
        data-testid="mabl-btn-wallet-connect"
        id="btn-wallet-connect"
        moralisAuth={false}
      />
    </>
  );
};

export default Header;
