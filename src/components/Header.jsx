import React from "react";
import header from "../assets/Header-img/logo.png";
import Right from "../assets/Header-img/car.png";
import Google from "../assets/Header-img/google.png";
import Apple from "../assets/Header-img/apple.png";
import Location from "../assets/Header-img/location.png";
import Calender from "../assets/Header-img/calendar.png";
import "../index.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-3 fw-medium mb-5 container-fluid">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={header}
              alt="Logo"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto gap-4 mb-2 mb-lg-0">
              {[
                "Become a renter",
                "Rental deals",
                "How it works",
                "Why choose us",
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link active"
                    href="#"
                    style={{ color: "#5f5f5f" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="d-flex">
              <button className="btn mx-2 px-4" style={{ color: "#5f5f5f" }}>
                Sign in
              </button>
              <button className="btn btn-primary px-4">Sign up</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid g-0">
        <div className="row g-0 mt-5 align-items-center">
          <div className="col-12 col-md-6  text-center text-md-start">
            <h1 className="fw-bold offset-md-1 px-5">
              Find, book and <br /> rent a car{" "}
              <span style={{ color: "#007bff" }}>Easily</span>
            </h1>
            <p
              className="fs-5 offset-md-1 px-5"
              style={{ color: "#424242", fontWeight: 400 }}
            >
              Get a car wherever and whenever you
              <br /> need it with your iOS and Android device.
            </p>
            <div className="d-flex gap-3 offset-md-1 px-5 mb-5 justify-content-center justify-content-md-start flex-wrap">
              {[Google, Apple].map((imgSrc, index) => (
                <a href="#" key={index}>
                  <img
                    src={imgSrc}
                    alt="Download App"
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5 d-flex justify-content-end">
            <img
              src={Right}
              alt="Car Rental"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row shadow rounded-3 align-items-center p-2 py-3 mx-3 text-center text-md-start">
          {[
            { img: Location, title: "Location", desc: "Search your location" },
            { img: Calender, title: "Pickup date", desc: "Tue 15 Feb, 09:00" },
            { img: Calender, title: "Return date", desc: "Thu 16 Feb, 11:00" },
          ].map((item, index) => (
            <div className="col-12 col-md-3" key={index}>
              <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                {index > 0 && (
                  <div
                    className="border-start border-2 d-none d-md-inline-block"
                    style={{ height: "40px", color: "##e0e0e0" }}
                  ></div>
                )}
                <img
                  className="img-fluid w-auto ps-2"
                  src={item.img}
                  alt="Icon"
                  style={{ maxHeight: "40px" }}
                />
                <div>
                  <p className="fw-medium mb-0">{item.title}</p>
                  <p
                    className="mb-0"
                    style={{ color: "#c4c4c4", fontSize: "12px" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 col-md-3 text-center text-md-end mt-3 mt-md-0">
            <button className="btn btn-primary px-5 py-2">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
