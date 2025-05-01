import React from "react";
import Footlogo from "../assets/Footer-img/footer.png";
import Location from "../assets/Footer-img/location.png";
import Call from "../assets/Footer-img/call.png";
import SMS from "../assets/Footer-img/sms.png";
import Facebook from "../assets/Footer-img/facebook.png";
import Insta from "../assets/Footer-img/instagram.png";
import Youtube from "../assets/Footer-img/youtube.png";
const Footer = () => {
  return (
    <>
      <footer className="footer pt-5" style={{ fontSize: "14px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 text-center text-md-start mb-4">
              <img src={Footlogo} alt="Company Logo" className="mb-3" />
              <div className="footer-menu">
                <ul className="menu-list mt-2 list-unstyled">
                  <li className="menu-item mb-4">
                    <a
                      className="footer-link text-reset text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start"
                      href="#"
                    >
                      <img
                        src={Location}
                        alt="Location Icon"
                        className="me-2"
                      />
                      <span>
                        25566 Hc 1, Glenallen, <br /> Alaska, 99588, USA
                      </span>
                    </a>
                  </li>
                  <li className="menu-item mb-4">
                    <a
                      className="footer-link text-reset text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start"
                      href="tel:+603478427312"
                    >
                      <img src={Call} alt="Phone Icon" className="me-2" />
                      <span>+603 4784 273 12</span>
                    </a>
                  </li>
                  <li className="menu-item mb-4">
                    <a
                      className="footer-link text-reset text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start"
                      href="mailto:rentcars@gmail.com"
                    >
                      <img src={SMS} alt="Email Icon" className="me-2" />
                      <span>rentcars@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {[
              {
                title: "Our Product",
                links: ["Career", "Car", "Packages", "Features", "Priceline"],
              },
              {
                title: "Resources",
                links: [
                  "Download",
                  "Help Centre",
                  "Guides",
                  "Partner Network",
                  "Cruises",
                  "Developer",
                ],
              },
              {
                title: "About Rentcars",
                links: [
                  "Why choose us",
                  "Our Story",
                  "Investor Relations",
                  "Press Center",
                  "Advertise",
                ],
              },
            ].map((menu, index) => (
              <div
                className="col-lg-2 col-md-6 col-sm-12 text-center text-md-start mb-4"
                key={index}
              >
                <div className="footer-menu lh-lg">
                  <p className="footer-heading  mb-3">{menu.title}</p>
                  <ul className="menu-list list-unstyled">
                    {menu.links.map((item) => (
                      <li className="menu-item" key={item}>
                        <a
                          className="footer-link text-reset text-decoration-none"
                          href="#"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-lg-2 col-md-6 col-sm-12 text-center text-lg-start mb-4">
              <div className="social-links">
                <p className="footer-heading mb-3">Follow Us</p>
                <ul className="d-flex justify-content-center justify-content-lg-start list-unstyled flex-wrap">
                  {[
                    { src: Facebook, alt: "Facebook", href: "#" },
                    { src: Insta, alt: "Instagram", href: "#" },
                    { src: Youtube, alt: "YouTube", href: "#" },
                  ].map((social, index) => (
                    <li className="me-3 ms-1 mb-2" key={index}>
                      <a href={social.href}>
                        <img
                          src={social.src}
                          alt={social.alt}
                          width="24"
                          height="24"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="text-black-100" />
          <p
            className="mb-0 py-3 pb-4 text-center text-lg-start"
            style={{ fontSize: "12px" }}
          >
            Copyright 2023 ・ Rentcars, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
