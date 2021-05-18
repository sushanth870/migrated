/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import { useSelector , useDispatch } from 'react-redux'
import Header from "../Header/Header";
import SearchIcon from "@material-ui/icons/Search";
import Brands from "./BrandsCard/Brands";
import Content2 from "./Content2/Content2";
import CategoryCard from "./CategoryCard/CategoryCard";
import Content from "./Content1/Content1";
import FeaturedCards from "./FeaturedCards/FeaturedCard";
import CareerCard from "./CareerCard/CareerCard";
import CityCards from "./CityCard/CityCard";
import {Landingpage2__title , 
  Hashtag2,
  Title__landing__description,
  Landingpage2__title__heading,
  Search__landing,
  Searchbar__landing2,
  Focus_input,
  Landingsearch__btn,
  Landingpage2__container,
  SectionTitle,
  SectionContent,
  Section
} from "../../styles/styled-components/LandingPageStyles";
// ------------------
// import {API_ENDPOINT} from '../../AdminServices/baseURL'

// import axios from "axios";

// import { getItem } from "../../utility/localStorageControl";
// import AdminService from "../../AdminServices/AdminService";

// import {getUserData} from '../../redux/actions/user.actions'
// import {isAdminLogged} from '../../redux/actions/auth.actions'

const Landing2 = () => {
  const [internCategories, setCategories] = useState([]);
  const [internships, setInternships] = useState([]);
  const [count, setCount] = useState(0);
//   const dispatch = useDispatch();
//   const auth = useSelector(state => state.auth);

//   const getCategories = async () => {
//     await axios.get(`${API_ENDPOINT}/internship/v1/internships/stats/`)
//     .then(res => {
//       setCategories(res.data.category);
//     })
//     .catch(err => console.log(err));
//   }

//   const getFeaturedJobs = async () => {
//     await axios.get(`${API_ENDPOINT}/internship/v1/internships/`)
//     .then(res => {
//       setCount(res.data.count);
//       setInternships(res.data.results.splice(0,4));
//     })
//     .catch(err => console.log(err));
//   } 

//   useEffect(async() => {
//     getCategories();
//     getFeaturedJobs();
//     if(!auth.authenticate){
//       dispatch(isAdminLogged());
//     }
//     if(auth.token){
//       dispatch(getUserData('landing page'));
//     }
//   },[]);
  
  return (
    <>
      <Header />
      <Landingpage2__container className=" container-fluid mx-auto">
      <Landingpage2__title>
        <div className="row container-fluid">
          <div className="col-xlg-5 col-md-6 ml-5 col-sm-8">
            <Hashtag2>
            <div className="container">
              #{count} jobs are available right now
            </div>
            </Hashtag2>
            <Landingpage2__title__heading>
            <div className="container">
              Find the most exciting jobs.
            </div>
            </Landingpage2__title__heading>
            <Title__landing__description>
            <div className="mt-3 container" style={{ fontFamily: "Gordita" }}>
              Leverage agile frameworks to provide a robust synopsis for high level overviews.
            </div>
            </Title__landing__description>
          </div>
        </div>
         </Landingpage2__title>
        <div className=" container">
          <Search__landing className="row container mx-auto">
            <Searchbar__landing2 style={{ maxWidth: "100%", width: "480px", backgroundColor: "#fff", }} >
              <SearchIcon />
                <Focus_input type="text" className="form-control" placeholder="Type job title, keywords" />
            </Searchbar__landing2>
            <div className="" style={{ justifyContent: "center" }}>
              <Landingsearch__btn>Search</Landingsearch__btn>
            </div>
          </Search__landing>
        </div>
        <Brands />
        <hr className=""></hr>


        <Section >
          <SectionTitle>Explore by category</SectionTitle>
          <SectionContent>
            <CategoryCard data={internCategories} />
          </SectionContent>
        </Section>

        <div className="my-5">
          <Content />
        </div>

        <Section>
          <SectionTitle>Featured Jobs</SectionTitle>
          <SectionContent>
             <FeaturedCards data={internships} />
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Explore By Cities</SectionTitle>
          <div className="container-fluid">
          <CityCards />
          </div>
        </Section>

        <Section>
          <SectionTitle>Quick Career Tips</SectionTitle>

          <CareerCard />
        </Section>

        <div className=" mt-5" style={{ overflow: "hidden" }}>
          <Content2 />
        </div>
      </Landingpage2__container>
    </>
  );
};
export default Landing2;