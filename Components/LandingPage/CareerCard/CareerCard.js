/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import imgB1 from "../../../public/images/Landing2/blog-img1.png";
import imgB2 from "../../../public/images/Landing2/blog-img2.png";
import imgB3 from "../../../public/images/Landing2/blog-img3.png";
import imgBU1 from "../../../public/images/Landing2/blog-user-img1.png";
import imgBU2 from "../../../public/images/Landing2/blog-user-img2.png";
import imgBU3 from "../../../public/images/Landing2/blog-user-img3.png";
import Button_Slider from "../../Button_Slider/Button_Slider";
import {Card_title_landing,CareerCardsty,Card_text_landing,Img_Circle_54} from "../../../styles/styled-components/CareerCardStyled";

function CareerCard() {
  const Blogs = [{background: imgB1, name: 'CV Writing', heading: 'How to make a perfect CV that attracts the attention', content: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base.', authorImage: imgBU1, authorName: 'Anne Frank', authorDesig: 'Creative Director'},
  {background: imgB2, name: 'CV Writing', heading: 'How to make a perfect CV that attracts the attention', content: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base.', authorImage: imgBU2, authorName: 'Ryan Reynolds', authorDesig: 'Creative Asst. Director'},
  {background: imgB3, name: 'CV Writing', heading: 'How to make a perfect CV that attracts the attention', content: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base.', authorImage: imgBU3, authorName: 'Luke Williams', authorDesig: 'HOD-Creative'},]
  return (
    <div >
    <CareerCardsty className=" row container mx-auto">
      <Button_Slider scrollAmount={500}>
        {Blogs.map(blog => (
          <div className="" style={{ textAlign: "Left" }}>
            <div className="card bg-transparent border-0">
              <img src={blog.background} style={{borderTopLeftRadius:"34px",borderTopRightRadius:"34px"}} alt="..." />
              <div className="card-body pt-4 px-0 pl-3 pb-0" style={{ fontFamily: "Gordita" }}>
                <a className="text-uppercase  font-weight-bold py-1" style={{ color: "var(--cherry)" }}>{blog.name}</a>
                <h4><a><Card_title_landing>{blog.heading}</Card_title_landing></a></h4>
                <Card_text_landing className=" my-3">{blog.content}</Card_text_landing>
                <div className="media mb-5 ml-2" style={{alignItems: 'center'}}>
                  <Img_Circle_54 src={blog.authorImage} className=" mr-3 mt-2" alt="" />
                  <div className="media-body pl-2 pt-2">
                    <h6 className="mb-0">
                      <a className="mb-0  font-weight-semibold heading-default-color line-height-reset">
                        <Card_title_landing>{blog.authorName}</Card_title_landing>
                      </a>
                    </h6>
                    <Card_text_landing className="mb-0">
                      <a className="text-default-color">
                        {blog.authorDesig}
                      </a>
                    </Card_text_landing>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Button_Slider>
      </CareerCardsty>
    </div>
  );
}

export default CareerCard;
