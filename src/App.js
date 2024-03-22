import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import abi from './contract.json';
import {ethers,provider} from 'ethers'

function App() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [address, setAddress] = useState(null);
  const connectWallet = async () => {
    const contractAddress = "0x0A99EFda1e0aDAC5d02d3F33aE00Db8AFaeF5848";
    const contractABI = abi;
    try {
      const { ethereum } = window;
      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setAddress(account[0]);
        setState({ provider, signer, contract });

      } else {
        alert('Please install and log in to Metamask wallet to initiate the transaction.');
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("An error occurred while connecting to the wallet. Please try again.");
    }
  }

  useEffect(()=>{
    connectWallet();
  },[])

  return (
    <>
      <Home address={address} state={state}/>
    </>
  );
}

export default App;
