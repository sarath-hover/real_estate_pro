import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import "./property.css";
import Map from "../../components/map/Map";

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

            {/* -- -- -- Facilities -- -- --  */}

            <div className="flexStart facilities">
              {/* ........ Bathrooms ........ */}

              <div className="flexStart facility">
                <FaShower size={20} color="#1f3e72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>

              {/* ........ Parking ......... */}

              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1f3e72" />
                <span>{data?.facilities?.parkings} Parking</span>
              </div>

              {/* ......... Bedrooms ......... */}

              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1f3e72" />
                <span>{data?.facilities?.bedrooms}Rooms</span>
              </div>
            </div>

            {/* -- -- -- Description -- -- -- */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* -- -- -- Address -- -- -- */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}
                {data?.city}
              </span>
            </div>

            {/* -- -- -- Booking Button -- -- --  */}

            <button className="button">Book Your Visit</button>
          </div>

          {/* =========== Right Section =========== */}

          <div className="right map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
