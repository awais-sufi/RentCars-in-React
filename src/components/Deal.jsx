import React from "react";
import Car1 from "../assets/Deal-img/car1.png";
import Car2 from "../assets/Deal-img/car2.png";
import Car3 from "../assets/Deal-img/car3.png";
import Car4 from "../assets/Deal-img/car4.png";
import Star from "../assets/Deal-img/star.png";
import User from "../assets/Deal-img/user.png";
import Auto from "../assets/Deal-img/auto.png";
import Air from "../assets/Deal-img/air.png";
import Door from "../assets/Deal-img/door.png";
import Arrow from "../assets/Deal-img/arrow.png";

const Deal = () => {
  return (
    <>
      <div className="container text-center">
        <button className="btn mt-5 d-inline-block rounded-2 px-4 py-2 bg-primary-subtle text-primary text-uppercase fw-medium mb-3">
          POPULAR RENTAL DEALS
        </button>
        <h1 className="mb-5 fw-medium lh-lg">Most popular cars rental deals</h1>

        <section className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="shadow h-100 rounded-4 p-4">
                <img
                  src={Car1}
                  className="card-img-top img-fluid mb-1"
                  alt="Jaguar XE L P250"
                />
                <div className="card-body mt-4 text-start">
                  <h6 className="card-title">Jaguar XE L P250</h6>
                  <p className="lh-lg small">
                    <img src={Star} alt="Rating" />
                    <span
                      style={{ fontSize: "12px" }}
                      className="ms-1 fw-semibold"
                    >
                      4.8
                    </span>{" "}
                    <span style={{ fontSize: "12px", color: "#a0a0a0" }}>
                      (2,436 reviews)
                    </span>
                  </p>
                  <div className="text-muted small">
                    <div className="row" style={{ color: "#a0a0a0" }}>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img src={User} alt="Passengers" />
                        <p className="mb-0 small">4 Passengers</p>
                      </div>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img className="ms-3" src={Auto} alt="Auto" />
                        <p className="mb-0 small">Auto</p>
                      </div>
                    </div>

                    <div className="row mt-2" style={{ color: "#a0a0a0" }}>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img src={Air} alt="Air Conditioning" />
                        <p className="mb-0 small">Air Conditioning</p>
                      </div>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img className="ms-3" src={Door} alt="Doors" />
                        <p className="mb-0 small">4 Doors</p>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0" style={{ fontSize: "14px" }}>
                        Price
                      </p>
                      <div className="d-flex align-items-center">
                        <span className="fs-6 fw-semibold">$1,800</span>
                        <span className="small" style={{ color: "#a8a8a8" }}>
                          /day
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-primary rounded-3 btn-sm w-100 mt-3">
                      Rent Now <img className="ms-1" src={Arrow} alt="Arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="shadow h-100 rounded-4 p-4">
                <img
                  src={Car2}
                  className="card-img-top mb-3"
                  alt="Jaguar XE L P250"
                />
                <div className="card-body mt-4 text-start">
                  <h6 className="card-title">Audi R8</h6>
                  <p className="lh-lg small">
                    <img src={Star} alt="Rating" />{" "}
                    <span
                      style={{ fontSize: "12px" }}
                      className="ms-1 fw-semibold"
                    >
                      4.8
                    </span>
                    <span style={{ fontSize: "12px", color: "#a0a0a0" }}>
                      (2,436 reviews)
                    </span>
                  </p>
                  <div className="small">
                    <div className="row" style={{ color: "#a0a0a0" }}>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img src={User} alt="Passengers" />
                        <p className="mb-0 small">2 Passengers</p>
                      </div>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img className="ms-3" src={Auto} alt="Auto" />
                        <p className="mb-0 small">Auto</p>
                      </div>
                    </div>

                    <div className="row mt-2" style={{ color: "#a0a0a0" }}>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img src={Air} alt="Air Conditioning" />
                        <p className="mb-0 small">Air Conditioning</p>
                      </div>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img className="ms-3" src={Door} alt="Doors" />
                        <p className="mb-0 small">2 Doors</p>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0" style={{ fontSize: "14px" }}>
                        Price
                      </p>
                      <div className="d-flex align-items-center">
                        <span className="fs-6 fw-semibold">$2,100</span>
                        <span className="small" style={{ color: "#a8a8a8" }}>
                          /day
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-primary rounded-3 btn-sm w-100 mt-3">
                      Rent Now <img className="ms-1" src={Arrow} alt="Arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="shadow h-100 rounded-4 p-4">
                <img
                  src={Car3}
                  className="card-img-top mb-2"
                  alt="Jaguar XE L P250"
                />
                <div className="card-body mt-4 text-start">
                  <h6 className="card-title">BMW M3</h6>
                  <p className="lh-lg small">
                    <img src={Star} alt="Rating" />{" "}
                    <span
                      style={{ fontSize: "12px" }}
                      className="ms-1 fw-semibold"
                    >
                      4.8
                    </span>
                    <span style={{ fontSize: "12px", color: "#a0a0a0" }}>
                      (2,436 reviews)
                    </span>
                  </p>
                  <div className="small">
                    <div className="row" style={{ color: "#a0a0a0" }}>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img src={User} alt="Passengers" />
                        <p className="mb-0 small">4 Passengers</p>
                      </div>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img className="ms-3" src={Auto} alt="Auto" />
                        <p className="mb-0 small">Auto</p>
                      </div>
                    </div>

                    <div className="row mt-2" style={{ color: "#a0a0a0" }}>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img src={Air} alt="Air Conditioning" />
                        <p className="mb-0 small">Air Conditioning</p>
                      </div>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img className="ms-3" src={Door} alt="Doors" />
                        <p className="mb-0 small">4 Doors</p>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0" style={{ fontSize: "14px" }}>
                        Price
                      </p>
                      <div className="d-flex align-items-center">
                        <span className="fs-6 fw-semibold">$1,600</span>
                        <span className="small" style={{ color: "#a8a8a8" }}>
                          /day
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-primary rounded-3 btn-sm w-100 mt-3">
                      Rent Now <img className="ms-1" src={Arrow} alt="Arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="shadow h-100 rounded-4 p-4">
                <img
                  src={Car4}
                  className="card-img-top mb-3"
                  alt="Jaguar XE L P250"
                />
                <div className="card-body mt-4 text-start">
                  <h6 className="card-title">Lamborghini Huracan</h6>
                  <p className="small lh-lg">
                    <img src={Star} alt="Rating" />{" "}
                    <span
                      style={{ fontSize: "12px" }}
                      className="ms-1 fw-semibold"
                    >
                      4.8
                    </span>{" "}
                    <span style={{ fontSize: "12px", color: "#a0a0a0" }}>
                      (2,436 reviews)
                    </span>
                  </p>
                  <div className="small">
                    <div className="row" style={{ color: "#a0a0a0" }}>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img src={User} alt="Passengers" />
                        <p className="mb-0 small">2 Passengers</p>
                      </div>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img className="ms-3" src={Auto} alt="Auto" />
                        <p className="mb-0 small">Auto</p>
                      </div>
                    </div>

                    <div className="row mt-2" style={{ color: "#a0a0a0" }}>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img src={Air} alt="Air Conditioning" />
                        <p className="mb-0 small">Air Conditioning</p>
                      </div>
                      <div
                        className="col-6 d-flex align-items-center gap-1"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <img className="ms-3" src={Door} alt="Doors" />
                        <p className="mb-0 small">2 Doors</p>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0" style={{ fontSize: "14px" }}>
                        Price
                      </p>
                      <div className="d-flex align-items-center">
                        <span className="fs-6 fw-semibold">$2,300</span>
                        <span className="small" style={{ color: "#a8a8a8" }}>
                          /day
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-primary rounded-3 btn-sm w-100 mt-3">
                      Rent Now <img className="ms-1" src={Arrow} alt="Arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn text-muted text-decoration-none border border-gray rounded px-4 py-2">
              Show all vehicles →
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Deal;
