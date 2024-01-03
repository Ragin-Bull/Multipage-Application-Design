import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import "./index.css";

const route = createBrowserRouter([{
  path:'/',
  element: <Layout />,
  children: [
    {

    }, {

    }, {

    }, {
      
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
