import React from "react";
import Tick from "../assets/Work-img/tick.png";
import Calender from "../assets/Work-img/calendar.png";
import Car from "../assets/Work-img/car.png";

const Work = () => {
  return (
    <>
      <div className="container text-center">
        <button className="btn mt-5 d-inline-block rounded-2 px-4 py-2 bg-primary-subtle text-primary text-uppercase fw-medium mb-3">
          How it Works
        </button>

        <h1 className="mb-5 fw-medium lh-lg">
          Rent with the following 3 working steps
        </h1>
        <div className="row my-5 mx-md-5 px-5">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <img src={Tick} className="img-fluid" alt="Choose Location Icon" />
            <h4 className="fw-semibold mt-3 mb-2 lh-lg">Choose Location</h4>
            <p style={{ color: "#424242", fontWeight: 500 }}>
              Choose your and find <br /> your best car
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <img src={Calender} className="img-fluid" alt="Pick-up Date Icon" />
            <h4 className="fw-semibold mt-3 mb-2 lh-lg">Pick-up Date</h4>
            <p style={{ color: "#424242", fontWeight: 500 }}>
              Select your pick-up date and <br />
              time to book your car
            </p>
          </div>
          <div className="col-12 col-md-4">
            <img src={Car} className="img-fluid" alt="Book Car Icon" />
            <h4 className="fw-semibold mt-3 mb-2 lh-lg">Book Your Car</h4>
            <p style={{ color: "#424242", fontWeight: 500 }}>
              Book your car and we will deliver <br />
              it directly to you
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
