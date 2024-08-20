import {useState, useEffect, useContext} from 'react';
import Web3 from 'web3';
import axios from 'axios';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate() // fix spelling mistake
  const {url} = useContext(StoreContext)
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  
  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };
  
  const onConnect = async() => {
    try {
      const currentProvider = detectCurrentProvider();
      if(currentProvider) {
        await currentProvider.request({method: 'eth_requestAccounts'});
        const web3 = new Web3(currentProvider);
        const userAccount  =await web3.eth.getAccounts();
        const account = userAccount[0];
        console.log(account);
        
        let ethBalance = await web3.eth.getBalance(account);
        setEthBalance(ethBalance);
        setIsConnected(true);

        const response = await axios.post(`${url}/api/user/login`, {
          dtoken: account
        });
        if(response.data.success){
          console.log('djvfjvsd')
          localStorage.setItem('dToken', account) // fix local storage issue
          navigate('/dashboard') // fix spelling mistake
        }else{
          navigate('/home')
        }
      }
    } catch(err) {
      console.log(err);
    }
  }
  
  const onDisconnect = () => {
    setIsConnected(false);
  }
  
  
  
  return (
    <div className="app container px-5">
      <div className="app-header">
      </div>
      <div className="app-wrapper">
        {!isConnected && (
          <div>
            <button className="app-button__login" onClick={onConnect}>
            Login
            </button>
          </div>
        )}
      </div>
      {isConnected && (
        <div className="app-wrapper ">
          <div className="app-details">
            <h2> You are connected to metamask.</h2>
            
          </div>
          <div>
            <button className="app-buttons__logout" onClick={onDisconnect}>
            Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;