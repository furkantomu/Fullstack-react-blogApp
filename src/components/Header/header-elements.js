import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin-top: 60px;
  width: 100%;
`;
export const HeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", serif;
  color: #444;
`;
export const HeaderTitle = styled.span`
  position: absolute;

  top: ${({ small }) => (small ? "18%" : "20%")};
  font-size: ${({ big }) => (big ? "100px" : "20px")};
`;

export const HeaderHero = styled.div``;

export const HeaderCategoryChange = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  margin-top: 80px;

  h1 {
    font-size: 8rem;
    margin: 0;
    letter-spacing: 25px;
    color: #203040;
    font-family: 'Varela Round',sans-serif;
    font-style: italic;
    padding: 30px 0 30px 30px;
    width: 100%;
    background: linear-gradient(
      to right,
      rgb(76, 161, 175),
      rgb(196, 224, 229)
    );

    @media screen and (max-width:768px){
      font-size: 1.6rem;
      letter-spacing: 15px;
      padding: 30px 0 30px 30px;
    }
  }
`;
export const HeaderImg = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 80px;
  object-fit: cover;
`;
