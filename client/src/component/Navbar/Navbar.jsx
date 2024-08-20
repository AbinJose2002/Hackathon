import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Web3 from 'web3';
import axios from 'axios';
import { StoreContext } from '../context/StoreContext';

const Navbar = () => {
  const { url } = useContext(StoreContext);
  const [isConnected, setIsConnected] = useState(false);

  const detectCurrentProvider = () => {
    if (window.ethereum) {
      return window.ethereum;
    } else if (window.web3) {
      return window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
      return null;
    }
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];

        const response = await axios.post(`${url}/api/user/login`, {
          dtoken: account
        });

        if (response.status === 200) {
          localStorage.setItem('dToken', account); // Store account as dToken
          setIsConnected(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDisconnect = () => {
    localStorage.removeItem('dToken'); // Remove dToken on disconnect
    setIsConnected(false);
  };

  return (
    <div className="px-4 py-3 container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h2>AIM</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Our services
                </Link>
              </li>
            </ul>
            <div>
              {isConnected ? (
                <button onClick={onDisconnect} className="btn btn-primary">
                  Log Out
                </button>
              ) : (
                <button onClick={onConnect} className="btn btn-primary">
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
