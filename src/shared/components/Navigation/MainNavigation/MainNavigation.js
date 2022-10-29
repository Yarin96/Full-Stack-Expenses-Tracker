import React, { useState } from "react";
import MainHeader from "../MainHeader/MainHeader";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../../UIElements/Backdrop/Backdrop";
import { BiMenuAltLeft } from "react-icons/bi";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={classes.drawer_navigation}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className={classes.main_navigation_btn}
          onClick={openDrawerHandler}
        >
          <BiMenuAltLeft />
        </button>
        <h1 className={classes.title}>
          <Link to="/">myExpenses</Link>
        </h1>
        <nav className={classes.links}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
