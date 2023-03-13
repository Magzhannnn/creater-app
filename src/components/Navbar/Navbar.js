import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "../../UI/Container/Container";
import {
  ABOUT_ROUTE,
  BLOG_ROUTE,
  SERVICE_ROUTE,
  PROJECT_ROUTE,
  LOGIN_ROUTE,
} from "../../utils/constant_url";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
  }, [navigate]);

  const logOut = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    navigate(LOGIN_ROUTE);
  };
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);

  return (
    <>
      <Container className={styles.navbar}>
        <div className={styles["navbar-left"]}></div>
        <div className={styles["navbar-right"]}>
          {isAuth === "true" ? (
            <>
              <NavLink to={ABOUT_ROUTE} className={styles["navbar-right_item"]}>
                About
              </NavLink>{" "}
              <NavLink to={BLOG_ROUTE} className={styles["navbar-right_item"]}>
                Blog
              </NavLink>{" "}
              <NavLink
                to={SERVICE_ROUTE}
                className={styles["navbar-right_item"]}
              >
                Service
              </NavLink>{" "}
              <NavLink
                to={PROJECT_ROUTE}
                className={styles["navbar-right_item"]}
              >
                Project
              </NavLink>{" "}
              <div className={styles["navbar-right_item"]} onClick={logOut}>
                LogOut
              </div>
            </>
          ) : (
            <NavLink to={LOGIN_ROUTE} className={styles["navbar-right_item"]}>
              Authorization
            </NavLink>
          )}
        </div>
      </Container>
      <hr className={styles["navbar-line"]} />
    </>
  );
};

export default Navbar;
