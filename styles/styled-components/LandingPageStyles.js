import styled from "styled-components" 

export  const Landingpage2__title = styled.div`
  height: 80vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "Gordita";
  &::before{
    content: "";
    background-image: url('../../public/images/Landing2//bk.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    position: absolute;
    top: 15%;
    right: 0;
    z-index: -1;
    height: 100vh;
    width: 100%;

  }
  @media (max-width: 540px) {
    height: 60vh;
  }
  
`;

export const Hashtag2 = styled.div`
    color: var(--cherry);
    font-size: 18px;
    font-weight: 500;
    font-family: "Gordita";
    @media screen and (max-width: 540px) {
        .hashtag2 {
        font-size: 16px;
        }
    }
`
; 

export const Landingpage2__title__heading = styled.div`
    color: var(--h12);
    font-size: 60px;
    font-weight: 600;
    font-family: "Gordita";
    @media screen and (max-width: 772px)
    {
      font-size: 48px;
    }
    @media screen and (max-width: 540px) {
      font-size: 34px;
    }
    @media screen and (max-width: 360px) {
      font-size: 36px;
    }

`;

export const Title__landing__description = styled.div`
    font-size: 16px;
    color: var(--toast);
    font-family: "Gordita";
`;




export const Landing2__category__title = styled.div`
font-size: 42px;
    font-family: "Gordita";
    color: var(--h3);
    font-weight: 600;

    @media screen and (max-width: 540px) {
      font-size: 32px;
    }
`
;

export const Landingpage2__container = styled.div`
      overflow-x: hidden;
`;

export const Search__landing =styled.div`
    display: flex;
    column-gap: 42px;
    row-gap: 32px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const Searchbar__landing2 = styled.div`
 display: flex;
align-items: center;
border: 1px solid #d3d3d3;
border-radius: 30px;
padding: 4px 24px;
margin-top: 10px;
`;

export const Focus_input = styled.input`
    border: none;
`;

export const Landingsearch__btn =styled.button`

    background-color: var(--cherry);
    color: white;
    font-weight: 500;
    font-size: 18px;
    outline: none;
    border: none;
    border-radius: 30px;
    padding: 8px 32px;
    transform: translateY(4px);

    `;
// export const Quick__career__tips = styled.div`
//  font-size: 42px;
// font-family: "Gordita";
// color: var(--h3);
// font-weight: 600;
// `;