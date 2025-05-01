import React from "react";
import Apple from "../assets/Download-img/apple.png";
import Google from "../assets/Download-img/google.png";
import MOB from "../assets/Download-img/mob.png";
const Download = () => {
  return (
    <>
      <section className="container pt-5">
        <div className="row align-items-center">
          <div className="col-lg-6  col-md-6 col-12 text-center text-md-start lh-lg mb-5 mb-md-0">
            <button className="btn fw-medium mb-2 d-inline-block rounded-2 px-4 py-2 bg-primary-subtle text-primary">
              DOWNLOAD
            </button>
            <h1 className="fw-semibold mb-3 " style={{ fontSize: "48px" }}>
              Download Rentcars
              <br />
              App for <span style={{ color: "#007bff" }}> FREE</span>
            </h1>
            <p className="mb-4 custom-text">
              For faster, easier booking and exclusive deals.
            </p>
            <div className="d-flex gap-3 mb-5 justify-content-start flex-column flex-md-row align-items-center">
              <a href="#">
                <img
                  src={Google}
                  alt="Download on Google Play"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </a>
              <a href="#">
                <img
                  src={Apple}
                  alt="Download on Apple Store"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center">
            <img
              src={MOB}
              alt="Mobile App"
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
