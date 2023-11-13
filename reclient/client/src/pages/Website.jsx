import React from "react";
import Hero from "../components/Hero/Hero";
import Companies from "../components/companies/Companies";
import Contact from "../components/contact/Contact";
import GetStarted from "../components/getStarted/GetStarted";
import Residencies from "../components/residencies/Residencies";
import Value from "../components/value/Value";

function Website() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />

        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
}

export default Website;
