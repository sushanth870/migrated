import React from "react";
import imgC from "../../../public/images/Landing2/content-2-img1.png";
import {Image_landing, Pos_abs_br,Circle_41,Media_card_container,Content__title__landing,
          Bg_red_opacity_2, Heading__landing__section, Text_description,Title__lower} from "../../../styles/styled-components/Content1Styles";
const Content = () => {
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 col-xs-11">
              <div className="position-relative ">
                <Image_landing src={imgC} alt=""  />
                <Pos_abs_br className="abs-content bg-white">
                  <div className="media">
                    <Circle_41 className="check-mark bg-yellow-2">
                      <i className="fas fa-check text-white  font-size-6"></i>
                    </Circle_41>
                    <div
                      className="media-body pl-4"
                      style={{ fontFamily: "Gordita" }}
                    >
                      <Title__lower className="mb-0  text-uppercase">
                        Job alert!
                      </Title__lower>
                      <p className="mb-0 font-size-4 text-black-2">
                        104 new jobs are available in this week!
                      </p>
                    </div>
                  </div>
                </Pos_abs_br>
              </div>
            </div>
            <Media_card_container className="col-xl-5 col-lg-6 col-md-8 col-xs-10">
              <div className="content-1 pl-3" style={{ fontFamily: "Gordita" }}>
                <Content__title__landing>
                  Help you to get the <br className="d-none d-sm-block" /> best job that fits you
                </Content__title__landing>
                <div className="media">
                  <Bg_red_opacity_2 className="media-icon p-2 mt-3 mr-3 ">
                    <i className="fa fa-tasks" style={{color:"red"}}></i>
                  </Bg_red_opacity_2>
                  <div className="media-body pl-7">
                    <h5 className="mb-2 mt-4 hashtag2">
                      #1 Jobs site in India
                    </h5>
                    <p className="mb-3">
                      Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                    </p>
                  </div>
                </div>
                <div className="media mb-11">
                  <Bg_red_opacity_2 className="media-icon p-2 mt-3 mr-3 ">
                    <i className="fa fa-search" style={{color:"red"}}></i>
                  </Bg_red_opacity_2>
                  <div className="media-body pl-7 mb-4">
                    <Heading__landing__section className="mb-1 ">
                      Seamless searching
                    </Heading__landing__section>
                    <Text_description className="mb-0">
                      Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                    </Text_description>
                  </div>
                </div>
                <div className="media">
                  <Bg_red_opacity_2 className="media-icon p-2 mt-3 mr-3 ">
                    <i className="fa fa-industry" style={{color:"red"}}></i>
                  </Bg_red_opacity_2>
                  <div className="media-body">
                    <Heading__landing__section className="mb-1">
                      Hired in top companies
                    </Heading__landing__section>
                    <Text_description className="mb-0">
                      Podcasting operational change management inside of workflows to establish.
                    </Text_description>
                  </div>
                </div>
              </div>
            </Media_card_container>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
