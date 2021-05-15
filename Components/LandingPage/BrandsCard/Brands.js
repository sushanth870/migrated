import React from "react";
import Image from 'next/image';
import imgB1 from "../../../public/images/Landing2/brand-light-logo-1.png";
import imgB2 from "../../../public/images/Landing2/brand-light-logo-2.png";
import imgB3 from "../../../public/images/Landing2/brand-light-logo-3.png";
import imgB4 from "../../../public/images/Landing2/brand-light-logo-4.png";
import imgB5 from "../../../public/images/Landing2/brand-light-logo-5.png";
import imgB6 from "../../../public/images/Landing2/brand-light-logo-6.png";
import {Company__title, Gr_opacity_5, Single_brand_logo} from  "../../../styles/styled-components/BrandStyles"
const Brands = () => {
  return (
    <>
      {/* <!-- Brands Area --> */}
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <Company__title>
                  <h5 className="my-5" style={{ fontFamily: "Gordita" }} >
                    Get hired in top companies
                  </h5>
                </Company__title>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center mt-3 mb-5">
          <Gr_opacity_5 >
            <div className="my-6 ">
            <Single_brand_logo>
              <img src={imgB1} alt="" />
            </Single_brand_logo>
            </div>
            <div className="my-6 ">
            <Single_brand_logo>
              <img src={imgB2}  alt="" />
            </Single_brand_logo>
            </div>
            <div className="my-6 ">
            <Single_brand_logo>
              <img src={imgB3}  alt="" />
            </Single_brand_logo>
            </div>
            <div className="my-6 ">
            <Single_brand_logo>
              <img src={imgB4}  alt="" />
            </Single_brand_logo>
            </div>
            <div className="my-6 ">
            <Single_brand_logo>
              <img src={imgB5}  alt="" />
            </Single_brand_logo>
            </div>
            <div className="my-6 ">
            <Single_brand_logo>
              <img src={imgB6}  alt="" />
            </Single_brand_logo>
            </div>
          </Gr_opacity_5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
