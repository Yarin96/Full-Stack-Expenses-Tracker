import classes from "./MainHeader.module.css";
import Account from "../../../../user/Auth/Auth";
import React from "react";

const MainHeader = (props) => {
  return <header className={classes.header}>{props.children}</header>;
};

export default MainHeader;
