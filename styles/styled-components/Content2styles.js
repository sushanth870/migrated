import styled from "styled-components" 

export const Position_relative =styled.div`
    position: relative !important;
  `;

export const W_lg_50 = styled.div`
        width: 50% !important;
        margin-left: auto;
        @media screen and (max-width: 540px)
        {
            width: 100% !important;
        }

        @media screen and (max-width: 772px)
        {
            width: 100% !important;
        }
  `;
export const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
  `  ;
export const Single_item = styled.div`
    max-width: 20%;
    width: 20%;
`;   

export const Gallery__image__person =styled.div`
     @media screen and (max-width: 772px){
         width: 100% !important;
     }
     @media screen and (max-width: 540px){
        width: 100% !important;
     }
      `;
 
 export const Pos_lg_abs_c = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 772px){
        position: relative;
      top: 200px;
      left: 50%;
    }
    @media screen and (max-width: 540px){
        position: relative;
      top: 200px;
      left: 50%;
    }
 `;

 export const Category__label =styled.button`
    font: 0.8em "Gordita", sans-serif;
    font-weight: 500;
    border: 1px solid #a7a6a6;
    box-sizing: border-box;
    border-radius: 19.5px;
    background-color: white;
    transition: all 0.2s ease;
    padding: 6px 14px;
    box-shadow: none;
    white-space: nowrap;
    color: #3a3a3a;
    width: max-content;

    &:focus{
        color: #ffffff;
        background-color: #ec1f28;
        transition: none;
        box-shadow: none;
        border: 1px solid #ec1f28;
    }
    &:hover{
        color: #ec1f28;
        background-color: #ffffff;
        border: 1px solid #ec1f28;
    }
 `;