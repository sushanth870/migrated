/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import {Link} from 'react-router-dom';
import iconFR   from "../../../public/images/Landing2/icon-fire-rounded.svg";
import iconLPB  from "../../../public/images/Landing2/icon-loaction-pin-black.svg";
import iconS    from "../../../public/images/Landing2/icon-suitecase.svg";
import iconC    from "../../../public/images/Landing2/icon-clock.svg";
import {LogoMap} from '../../../utility/Maps/LandingPageMaps';
import {HiUserGroup} from 'react-icons/hi'
import {Rounded2, ImgCompanyLogo, Roww,
       Stipend__featured, Featured__fireIcons, 
       Text__skills,Details__featured, Tags__featured} from "../../../styles/styled-components/FeaturedCardStyled"

function FeaturedCards({data}) {  
  return (
    <div
      className="row justify-content-center"
      style={{ overflowX: "hidden", gap: "12px" }}
    >
      {data.map(featured =>{ 
        let given = featured.posted_date ? featured.posted_date : 0;
        if(given){
          var postedDate = given.split('T')[0];
          var PostedDate = postedDate.split('-')[2];
          var PostedMonth = postedDate.split('-')[1];

          var currentDate = new Date();
          var CurrentDate = String(currentDate.getDate()).padStart(2, '0');
          var CurrentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');

          var time = getPostedDate();
        }       

        function getPostedDate(){
          if(CurrentMonth === PostedMonth){
            return CurrentDate - PostedDate;
          } else{
            return (CurrentDate - PostedDate) + 30*(CurrentMonth - PostedMonth);
          }
        }
        // console.log('featured.company.name',featured.company.name);
        return (
        <Rounded2 className="col-md-5">
          <div className="col-md-12">
            <div className="media" style={{flexDirection: 'column' }}>
              <div className="square-72 d-block mr-3">
                {featured.company.logo.link && LogoMap.get(featured.company.name) ? (
                  <ImgCompanyLogo src={LogoMap.get(featured.company.name).url}  alt="" />
                ) : <HiUserGroup style={{fontSize: 40}} /> }
              </div>
              <Roww>
                <h3 className="mb-0">
                  <Link to={{
                    pathname: `/internship`,
                    search: `?id=${featured.uuid}`,
                    state: { uuid : featured.uuid, dashboard: false }
                  }}>
                    <a className="" style={{ fontFamily: "Gordita", fontSize: 20 }}>{featured.title ? featured.title : 'XYZ Company'}</a>
                  </Link>
                </h3>
                <Stipend__featured className="media">
                  <Featured__fireIcons src={iconFR} alt="" />
                  <p className="mt-2">
                    <Featured__paid>
                      {featured.min_stipend}-{featured.max_stipend} INR
                    </Featured__paid>
                  </p>
                </Stipend__featured>
              </Roww>
          </div>
        </div>
        <div className="row pt-1" style={{gap: 10}}>
          <div className="col-md-12" style={{padding: 0, paddingLeft: 15, paddingRight: 15}}>
            <Text__skills className="mb-0">Required Skills :</Text__skills>
            <TagsIcons list={featured.skills} />
          </div>
          <div className="col-md-12" style={{padding: 0, paddingLeft: 15, paddingRight: 15}}>
            <Text__skills className=" mb-0">Details :</Text__skills>
            <Details__featured>
              {featured.city ? (
                <li className="mt-2 font-size-small text-black-2 d-flex">
                  <FeatureCard__detailIcons> <img src={iconLPB} alt="" /> </FeatureCard__detailIcons>
                  <span className="font-weight-semibold" style={{ fontFamily: "Gordita" }} >
                    {featured.city}
                  </span>
                </li>
              ): null}     
              {featured.kind ? (
                <li className="mt-2 font-size-small text-black-2 d-flex">
                  <FeatureCard__detailIcons> <img src={iconS} alt="" /> </FeatureCard__detailIcons>
                  <span className="font-weight-semibold" style={{ fontFamily: "Gordita" }} >
                    {featured.kind}                  
                  </span>
                </li>
              ): null}     
              {featured.posted_date ? (
                <li className="mt-2 font-size-small text-black-2 d-flex">
                  <FeatureCard__detailIcons> <img src={iconC} alt="" /> </FeatureCard__detailIcons>
                  <span className="font-weight-semibold" style={{ fontFamily: "Gordita" }} >
                    {time}d ago
                  </span>
                </li>
              ): null}  
            </Details__featured>
          </div>
        </div>
      </Rounded2>
      )})}      
    </div>
  );
}

export default FeaturedCards;

export const TagsIcons =({list})=>{ 
  return (
    <Tags__featured>
      {list.map(item=>(
        <li className="mt-1">
          <Bg_regent_opacity_15 className="min-width-px-96 text-center rounded-3 py-1"
            style={{ fontFamily: "Gordita" }}
          >
            {item.name}
          </Bg_regent_opacity_15>
        </li>
      ))}
    </Tags__featured>
  )
      }