import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import "./property.css";

function Property() {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );
  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* ___________ Like Button ___________  */}

        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>

        {/* ____________ Image _____________ */}

        <img src={data?.image} alt="homeImage" />

        {/* ____________ Property Details _____________ */}

        <div className="flexCenter property-details">
          {/* ========= Left Section ========== */}

          <div className="flexColStart left">
            {/* ------ Head ------  */}

            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                ${data?.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
