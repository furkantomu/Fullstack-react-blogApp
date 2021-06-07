import React, { useMemo } from "react";
import {
  HeaderContainer,
  HeaderTitles,
  HeaderTitle,
  HeaderHero,
  HeaderImg,
  HeaderCategoryChange,
} from "./header-elements";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = React.memo((props) => {

  useMemo(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);


  return (
    <HeaderContainer>
      <HeaderTitles>
        <HeaderTitle small>React & Node</HeaderTitle>
        <HeaderTitle big>Blog</HeaderTitle>
      </HeaderTitles>
      <HeaderImg
        alt=""
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      {props.changeCategory && (
        <HeaderHero>
          <HeaderCategoryChange>
            <h1 data-aos="fade-left">
              <p style={{ fontSize: 15 }}>TAG:</p>
              {props.changeCategory}
            </h1>
          </HeaderCategoryChange>
        </HeaderHero>
      )}
    </HeaderContainer>
  );
});

export default Header;
