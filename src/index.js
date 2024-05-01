import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import { Home } from './pages/home';
import { Hotel } from './pages/hotel';
import { Vol } from './pages/vol';
import { Inscription } from './register/inscription';
import { Connexion } from './register/connexion';

import reportWebVitals from './reportWebVitals';
// index.html ou index.js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
  {
    path: "/vol",
    element: <Vol />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/icon",
    element: <App />,
  },

]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





// ReactDOM.render(

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
