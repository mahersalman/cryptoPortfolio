import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


   /*
   Token Balance : 

   https://api.etherscan.io/api
   ?module=account
   &action=tokenbalance
   &contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7
   &address=0x1760cf6ED927240260bdecA4BEc8b6924a228858
   &tag=latest&apikey=ZDQB9JAJ9GCPPSB5XYU4H1VWY295XM3W96
   
   https://api.etherscan.io/api
   ?module=account
   &action=addresstokenbalance
   &address=0x1760cf6ED927240260bdecA4BEc8b6924a228858
   &page=1
   &offset=100
   &apikey=ZDQB9JAJ9GCPPSB5XYU4H1VWY295XM3W96

   */