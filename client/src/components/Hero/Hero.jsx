import React from "react";
import "./hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../searchBar/SearchBar";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* ______________________ Left Section ______________________ */}

        <div className="flexColStart hero-left">
          {/* ---------------- title ------------------ */}

          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>

          {/* --------------- description ---------------- */}

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          {/* --------------- SearchBar ---------------  */}

          <SearchBar />

          {/* ---------------- Stats ----------------- */}

          <div className="flexCenter stats">
            {/* ========= 1 Stat ======== */}

            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span> +</span>
              </span>{" "}
              <br />
              <span className="secondaryText">Premium Products</span>
            </div>

            {/* ========= 2 Stat ======== */}

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span> +</span>
              </span>{" "}
              <br />
              <span className="secondaryText">Happy Customers</span>
            </div>

            {/* ========= 3 Stat ======== */}

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span> +</span>
              </span>{" "}
              <br />
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* ______________________ Right Section ______________________ */}

        <div className=" flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="heroImg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
