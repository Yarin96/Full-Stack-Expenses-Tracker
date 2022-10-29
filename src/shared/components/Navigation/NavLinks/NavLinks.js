import React, { useContext } from "react";
import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";

const NavLinks = () => {
  const authContext = useContext(AuthContext);

  return (
    <ul className={classes.nav_links}>
      {authContext.isLoggedIn && (
        <li>
          <NavLink to="/expenses">VIEW ALL</NavLink>
        </li>
      )}
      {authContext.isLoggedIn && (
        <li>
          <NavLink to="/expenses/add">ADD EXPENSE</NavLink>
        </li>
      )}
      {authContext.isLoggedIn && (
        <li>
          <NavLink to="/auth" onClick={authContext.logout}>
            LOG OUT
          </NavLink>
        </li>
      )}
      {!authContext.isLoggedIn && (
        <li>
          <NavLink to="/auth">ENTER ACCOUNT</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
