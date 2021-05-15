import styled from "styled-components" 


export const Image_landing = styled.img`
        width: 75%;

        @media (max-width: 768px) {
            width: 80%;
        }
        @media (max-width: 540px) {
          width: 85%;
        }
`;

export const Pos_abs_br =styled.div`
        position: absolute;
        bottom: 0;
        right: 0px;
        padding: 1.5rem 1rem;
        margin-bottom: 1.5rem;
        border-radius: 30px;
        max-width: 350px;
        box-shadow: 17px 26px 99px rgb(114 114 114 / 16%);
    `;

export const Circle_41 = styled.span` 
    max-width: 41px;
    min-width: 41px;
    max-height: 41px;
    min-height: 41px;
    border-radius: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(243, 227, 4);
`;

export const Title__lower = styled.h6`
    font-size: 18px;
    color: var(--cherry);
`;

export const Media_card_container =styled.div`
@media (max-width: 768px) {    
      margin-top: 24px;
  }
  
`;

export const Content__title__landing = styled.h2`
    font-size: 42px;
    font-weight: 700;
    color: var(--h12);

    @media (max-width: 540px) {
      font-size: 36px;
    }
`;

export const Bg_red_opacity_2 = styled.div`    
    background-color: rgba(247, 30, 63, 0.2);
    border-radius: 5px;
    font-size: 30px;
`;

export const Heading__landing__section = styled.h5`
    font-size: 18px;
    color: var(--h3);
    `;

export const Text_description =styled.p`
font-size: 16px;
`;
