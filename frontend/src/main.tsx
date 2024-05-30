import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter.tsx";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ThemeContextProvider} from "./settings/context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <AppRouter />
        <ToastContainer />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
)
