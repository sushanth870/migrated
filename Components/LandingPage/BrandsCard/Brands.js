import React from "react";
import Image from 'next/image';
import imgB1 from "../../../public/images/Landing2/brand-light-logo-1.png";
import imgB2 from "../../../public/images/Landing2/brand-light-logo-2.png";
import imgB3 from "../../../public/images/Landing2/brand-light-logo-3.png";
import imgB4 from "../../../public/images/Landing2/brand-light-logo-4.png";
import imgB5 from "../../../public/images/Landing2/brand-light-logo-5.png";
import imgB6 from "../../../public/images/Landing2/brand-light-logo-6.png";
import {Company__title, Gr_opacity_5, Single_brand_logo} from  "../../../styles/styled-components/BrandStyles"
import { Section, SectionTitle } from "../../../styles/styled-components/LandingPageStyles";
const Brands = () => {
  return (
    <>
      {/* <!-- Brands Area --> */}
      <Section>
          <SectionTitle>Get hired in top companies</SectionTitle>
          <div className="row align-items-center justify-content-center mt-5 mb-5">
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
        </Section>
    </>
  );
};

export default Brands;
