import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Work from "./components/Work";
import Choose from "./components/Choose";
import Deal from "./components/Deal";
import Testimonial from "./components/Testimonial";
import Download from "./components/Download";
import Footer from "./components/Footer";
import header from "../src/assets/Header-img/logo.png";
import Right from "../src/assets/Header-img/car.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const images = [header, Right];

  useEffect(() => {
    const loadResources = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const loadImages = images.map(
          (src) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            })
        );
        await Promise.all(loadImages);

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading resources", error);
      }
    };

    loadResources();
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <Header />
            <Work />
            <Choose />
            <Deal />
            <Testimonial />
            <Download />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
