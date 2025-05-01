import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import "swiper/css/free-mode";
import { Autoplay, Parallax, FreeMode } from "swiper/modules";
import React from "react";
import CardB from "../assets/Testimonals-img/1.png";
import Star from "../assets/Testimonals-img/stars.png";
import "../index.css";
const Testimonial = () => {
  return (
    <>
      <div className="bg-testi py-5 my-5">
        <div className="container text-center">
          <button className="btn fw-medium mt-5 d-inline-block rounded-2 px-4 py-2 bg-primary-subtle text-primary text-uppercase mb-3">
            TESTIMONIALS
          </button>
          <h1 className="fw-medium lh-lg">What people say about us?</h1>
        </div>

        <div className="container-fluid px-4 px-md-0 g-0 py-5">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            parallax={true}
            freeMode={true}
            breakpoints={{
              768: { slidesPerView: 2 }
            }}
            modules={[Autoplay, FreeMode, Parallax]}
          >
            <SwiperSlide>
              <div className="card rounded-5 shadow h-100">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={CardB}
                      className="img-fluid w-100 object-fit-cover"
                      alt="User Review"
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div className="col-md-6 d-flex p-2 align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">
                        <span className="fs-1 fw-medium">5.0</span> stars
                      </h5>

                      <img
                        src={Star}
                        className="img-fluid mb-3"
                        alt="Star Rating"
                        style={{ maxWidth: "100px" }}
                      />
                      <p className="card-text pt-2 mt-3">
                        “I feel very secure when using caretall's services. Your
                        customer care team is very enthusiastic and the driver
                        is always on time.”
                      </p>
                      <p className="card-text mt-5">
                        <span
                          className="fw-medium"
                          style={{ fontSize: "24px" }}
                        >
                          {" "}
                          Charlie Johnson{" "}
                        </span>
                        <br />
                        <small className="text-body-secondary">
                          From New York, US
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card rounded-5 shadow h-100">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={CardB}
                      className="img-fluid  w-100 object-fit-cover"
                      alt="User Review"
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div className="col-md-6 d-flex p-2 align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">
                        <span className="fs-1 fw-medium">5.0</span> stars
                      </h5>

                      <img
                        src={Star}
                        className="img-fluid mb-3"
                        alt="Star Rating"
                        style={{ maxWidth: "100px" }}
                      />
                      <p className="card-text pt-2 mt-3">
                        “I feel very secure when using caretall's services. Your
                        customer care team is very enthusiastic and the driver
                        is always on time.”
                      </p>
                      <p className="card-text mt-5">
                        <span
                          className="fw-medium"
                          style={{ fontSize: "24px" }}
                        >
                          {" "}
                          Charlie Johnson{" "}
                        </span>
                        <br />
                        <small className="text-body-secondary">
                          From New York, US
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card rounded-5 shadow h-100">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={CardB}
                      className="img-fluid  w-100 object-fit-cover"
                      alt="User Review"
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div className="col-md-6 d-flex p-2 align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">
                        <span className="fs-1 fw-medium">5.0</span> stars
                      </h5>

                      <img
                        src={Star}
                        className="img-fluid mb-3"
                        alt="Star Rating"
                        style={{ maxWidth: "100px" }}
                      />
                      <p className="card-text pt-2 mt-3">
                        “I feel very secure when using caretall's services. Your
                        customer care team is very enthusiastic and the driver
                        is always on time.”
                      </p>
                      <p className="card-text mt-5">
                        <span
                          className="fw-medium"
                          style={{ fontSize: "24px" }}
                        >
                          {" "}
                          Charlie Johnson{" "}
                        </span>
                        <br />
                        <small className="text-body-secondary">
                          From New York, US
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
