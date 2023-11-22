import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-a5c4s4g7vd71o3pf.us.auth0.com"
      clientId="7ccOxisSkIB3xAt3Hka0Lgio4a6mZPxN"
      authorizationParams={{
        redirect_uri: "http://localhost:3000",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
