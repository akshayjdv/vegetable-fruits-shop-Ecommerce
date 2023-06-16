import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./index.css";
import {BrowserRouter } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


ReactDOM.render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>

    <ToastContainer/>
  </>,document.getElementById('root')
)