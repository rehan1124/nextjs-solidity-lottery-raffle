import { useMoralis } from "react-moralis";

const Header = () => {
  const { enableWeb3 } = useMoralis();
  return <>I am Header component.</>;
};

export default Header;
