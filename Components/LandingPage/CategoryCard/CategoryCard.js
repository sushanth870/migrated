import React from "react";
import { FaBriefcase } from "react-icons/fa";
import {CategoriesMap} from '../../../utility/Maps/LandingPageMaps'
import {Card__container__landing,Landing__card,Landingcard__image,Landingcard__content,Landingcard__title,Landingcardsubtitle} from "../../../styles/styled-components/CategoryCardStyles"
const CategoryCard = ({data}) => {
  return (
    <Card__container__landing className="container">
      {data.map(category => {
        var Icon = CategoriesMap.get(category.category.toString()).Icon;
        return(
        <Landing__card>
          <Landingcard__image
            style={{ backgroundColor: category.category ? CategoriesMap.get(category.category.toString()).backgroundColor : 'rgb(236, 31, 40)'}}
            >
            {category.category ? <Icon /> : <FaBriefcase />}
          </Landingcard__image>
          <Landingcard__content className=" mt-3">
            <Landingcard__title>{category.category ? category.category : 'ABC ACD'}</Landingcard__title>
            <Landingcardsubtitle>{category.active_internships ? category.active_internships : '2'} Vacancies</Landingcardsubtitle>
          </Landingcard__content>
        </Landing__card>
      )}
      )}      
    </Card__container__landing>
  );
}

export default CategoryCard;
