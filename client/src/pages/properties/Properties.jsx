import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./properties.css";

function Properties() {
  const { data, isError, isLoading } = useProperties();
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar />
      </div>
    </div>
  );
}

export default Properties;
