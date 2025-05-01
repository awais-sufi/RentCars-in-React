import React from "react";
import Car from "../assets/Choose-img/car.png";
import Doller from "../assets/Choose-img/doller.png";
import Guy from "../assets/Choose-img/guy.png";
import Twenty from "../assets/Choose-img/24.png";
import Msg from "../assets/Choose-img/msg.png";
import "../index.css";

const Choose = () => {
  return (
    <>
      <div className="container-fluid g-0">
        <div className="row g-0 align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <img src={Car} alt="Car Rental" className="img-fluid w-100" />
          </div>
          <div className="col-12 col-md-6">
            <div className="p-4 p-md-5">
              <button className="btn mt-5 d-inline-block rounded-2 px-4 py-2 bg-primary-subtle text-primary text-uppercase fw-medium mb-3">
                Why Choose Us
              </button>
              <h2 className="fw-semibold mb-4">
                We offer the best experience <br /> with our rental deals
              </h2>
              <div className="d-grid gap-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="icon-box">
                    <img src={Doller} alt="Icon" />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Best price guaranteed</h5>
                    <p className="text-muted" style={{ fontWeight: 400 }}>
                      Find a lower price? We'll refund you 100% <br /> of the
                      difference.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="icon-box">
                    <img src={Guy} alt="Icon" />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Experienced drivers</h5>
                    <p className="text-muted" style={{ fontWeight: 400 }}>
                      Don't have a driver? Don't worry, we have many <br />{" "}
                      experienced drivers for you.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="icon-box">
                    <img src={Twenty} alt="Icon" />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">24-hour car delivery</h5>
                    <p className="text-muted" style={{ fontWeight: 400 }}>
                      Book your car anytime and we will deliver it <br />{" "}
                      directly to you.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="icon-box">
                    <img src={Msg} alt="Icon" />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">24/7 technical support</h5>
                    <p className="text-muted" style={{ fontWeight: 400 }}>
                      Have a question? Contact Rentcars support <br />
                      any time when you have a problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
