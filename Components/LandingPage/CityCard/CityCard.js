import React from "react";
import wfh from "../../../public/images/Landing2/imagesintern/work_from_home.svg";
import bangalore from "../../../public/images/Landing2/imagesintern/bangalore.svg";
import chennai from "../../../public/images/Landing2/imagesintern/chennai.svg";
import delhi_ncr from "../../../public/images/Landing2/imagesintern/delhi_ncr.svg";
import hyderabad from "../../../public/images/Landing2/imagesintern/hyderabad.svg";
import international from "../../../public/images/Landing2/imagesintern/international.svg";
import kolkata from "../../../public/images/Landing2/imagesintern/kolkata.svg";
import mumbai from "../../../public/images/Landing2/imagesintern/mumbai.svg";
import {Landing__card,Card__container__landing,Landingcard__image,Landingcard__content,Landingcard__title} from "../../../styles/styled-components/CareerCardStyled"

function CityCards() {
  const Cities = [{name: 'Work from home', image: wfh, backgroundColor: '#ec1f28'},
  {name: 'Bengaluru', image: bangalore, backgroundColor: 'rgb(247, 127, 0)'},
  {name: 'Chennai', image: chennai, backgroundColor: '#fca311'},
  {name: 'Delhi', image: delhi_ncr, backgroundColor: '#ff006e'},
  {name: 'Hyderabad', image: hyderabad, backgroundColor: '#011627'},
  {name: 'Mumbai', image: mumbai, backgroundColor: '#2ec4b6'},
  {name: 'Kolkata', image: kolkata, backgroundColor: '#4361ee'},
  {name: 'International', image: international, backgroundColor: '#bcb8b1'},];
  return (
     <Card__container__landing className="container">
     {Cities.map(city => (
        <Landing__card>
          <Landingcard__image
            style={{ backgroundColor: city.backgroundColor }}
          >
            <img src={city.image} alt="places"/>
          </Landingcard__image>
          <Landingcard__content className=" mt-3">
            <Landingcard__title>{city.name}</Landingcard__title>
          </Landingcard__content>
        </Landing__card>
     ))}      
    </Card__container__landing>
  );
}

export default CityCards;
