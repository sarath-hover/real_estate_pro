import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "https://dev-a5c4s4g7vd71o3pf.us.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
