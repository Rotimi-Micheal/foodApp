import React from "react";
import ImageHeader from "./ImageHeader";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>bamzyMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <ImageHeader />
    </React.Fragment>
  );
};

export default Header;
