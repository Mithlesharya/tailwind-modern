import React from "react";
// import featureImage1 from "../assets/img/order1.webp";
// import featureImage2 from "../assets/img/order2.webp";
// import featureImage3 from "../assets/img/order3.webp";

import { FeaturedData } from "../data/constants";

const Homesec = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="sec-title">
            <h1 className="text-[25px] font-[400]">Featured</h1>
          </div>

          {FeaturedData.map((data) => {
            <div className="featured-item relative">
              <div className="feauted-img">
                <img src={data.img} alt="" />
              </div>
              <div className="featured-name">
                <a
                  href=""
                  className="py-2 px-8 hover:bg-gray-400 bg-black text-white rounded-full"
                >
                  {data.fname}
                </a>
              </div>
            </div>;
          })}
        </div>
      </section>
    </>
  );
};

export default Homesec;
