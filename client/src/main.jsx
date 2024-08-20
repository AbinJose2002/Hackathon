import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ReactDOM from 'react-dom/client'
import './index.css';
import StoreContextProvider from './component/context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
)