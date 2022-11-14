import React from "react";
import bannerImg from "../assets/img/bannder-nike.webp";
import Homesec from "./Homesec";

const Hero = () => {
  return (
    <>
      <section className="hero-sec">
        <div className="container text-center mx-auto px-2">
          <img src={bannerImg} alt={bannerImg} />

          <div className="banner-content my-16">
            <p>The Best Gifts Move You</p>
            <h1 className="text-6xl font-[900] pb-2">UNWRAP POSSIBILITIES</h1>
            <p>
              This holiday, give more than a gift. Give the joy of possibility.
              Inspire a special someone to chase that runner’s high.
              <br /> To dance like nobody’s watching. To feel stronger. To be
              better.
              <br />
              <br />
              Not sure what to gift? Keep scrolling for some tips.
            </p>
            <div className="banner-btn mt-8">
              <a
                className="py-2 px-6 hover:bg-gray-400 bg-black text-white rounded-full mx-3"
                href=""
              >
                Shop
              </a>
              <a
                href=""
                className="py-2 px-8 hover:bg-gray-400 bg-black text-white rounded-full"
              >
                Explore More Gifts
              </a>
            </div>
          </div>
        </div>
      </section>
      <Homesec />
    </>
  );
};

export default Hero;
