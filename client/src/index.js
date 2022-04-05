import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import { CartProvider } from "./components/contexts/CartContext";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <CartProvider>
//   <App />
//   </CartProvider>,
//   rootElement
// );

ReactDOM.render(
  <React.StrictMode>
    {/* <CartProvider> */}
    <App />
    {/* </CartProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
