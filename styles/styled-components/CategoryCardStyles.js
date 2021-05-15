import styled from "styled-components" 

export const Card__container__landing = styled.div`

    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    @media (min-width: 1200px) {
      max-width: 1200px;
    }
  
    `;

export const Landing__card =styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    border: 1px solid rgba(128, 120, 120, 0.5);
    flex: 0 0 24%;
    padding: 36px 0px 20px;
    border-radius: 10px;
    flex: 1 0 20%;

    @media screen and (max-width: 540px) {
      padding: 20px;
    }
`;

export const Landingcard__image = styled.div`
font-size: 1.5rem;
border-radius: 10px;
max-width: 70px;
min-width: 70px;
max-height: 70px;
min-height: 70px;
display: flex;
align-items: center;
justify-content: center;
color: #fff !important;
text-align: center;
margin-left: auto;
margin-right: auto;

`;

export const Landingcard__content = styled.div`    
font-family: "Gordita";

@media screen and (max-width: 540px) {
      row-gap: 24px;
    }
`;

export const Landingcard__title = styled.div`

    font-size: 18px;
    color: var(--h3);
    font-weight: 500;
    line-height: 50px;

    @media screen and (max-width: 772px) {
      line-height: 32px;
    }

    @media screen and (max-width: 540px) {
        line-height: 24px;
    }
`;

export const   Landingcardsubtitle= styled.div`  
color: var(--toast);
`;

