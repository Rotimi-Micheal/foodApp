import React from "react";
import mealsImage from "../../assests/meals.jpg"
import classes from "./ImageHeader.module.css"

const ImageHeader = () => {
    return <React.Fragment>
        <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table full of delicios food" />
        </div>
    </React.Fragment>
}

export default ImageHeader