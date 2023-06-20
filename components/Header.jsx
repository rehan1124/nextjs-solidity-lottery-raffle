import { useMoralis } from "react-moralis";
import { useEffect } from "react";

const Header = () => {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) return;
    if (window.localStorage.getItem("connected")) {
      enableWeb3();
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log("Account connected: ", account);
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Account disconnected.");
      }
    });
  });

  // Connect to Metamask
  const handleButtonClick = async () => {
    await enableWeb3();
    window.localStorage.setItem("connected", "injected");
  };

  return (
    <>
      {account ? (
        <div>Connected to account: {account}!</div>
      ) : (
        <button
          data-testid="mabl-btn-enable-web3"
          onClick={handleButtonClick}
          disabled={isWeb3EnableLoading}
        >
          Connect!
        </button>
      )}
    </>
  );
};

export default Header;
