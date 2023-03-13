import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { authValid, loginEnter, isThereSuch } from "../../helpers/AuthValid";
import { userRergistration } from "../../store/users/users-actions";
import { selectAllUsers } from "../../store/users/users-selectors";
import Container from "../../UI/Container/Container";
import MyInput from '../../UI/MyInput/MyInput';
import {
  ABOUT_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../utils/constant_url";
import styles from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const location = useLocation();
  const navigate = useNavigate();
  const redirectLocal = location.pathname === LOGIN_ROUTE;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("default");

  const login = (e) => {
    e.preventDefault();

    if (redirectLocal) {
      //* для логин
      if (authValid(email, password)) {
        if (loginEnter(users, email, password)) {
          navigate(ABOUT_ROUTE);
        }
      }
    } else {
      //* для регистраций
      if (authValid(email, password, name)) {
        const user = {
          email,
          password,
          name,
          gender,
          id: Date.now(),
        };
        if (!isThereSuch(users, email)) {
          dispatch(userRergistration(user));
          navigate(ABOUT_ROUTE);
        }
      }
    }
  };

  return (
    <Container className={styles.auth}>
      <h1 style={{ textAlign: "center", marginBottom: 10 }}>
        {redirectLocal ? "Login" : "Registration"}
      </h1>
      <form className={styles["auth-form"]}>
        {!redirectLocal && (
          <MyInput
            type="text"
            placeholder="Input name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <MyInput
          type="email"
          placeholder="Input email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MyInput
          type="password"
          placeholder="Input password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles["auth-genter_select"]}>
          {!redirectLocal && (
            <div>
              <select
                className={styles["auth-gender"]}
                defaultValue={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="default" disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          )}
          <div>
            <button className={styles["auth-footer_btn"]} onClick={login}>
              Click
            </button>
          </div>
        </div>
      </form>
      <div className={styles["auth-footer"]}>
        {redirectLocal ? (
          <div className={styles["auth-footer_text"]}>
            Don't have an account?{"   "}
            <NavLink className={styles["text_nav"]} to={REGISTRATION_ROUTE}>
              Registration
            </NavLink>
          </div>
        ) : (
          <div className={styles["auth-footer_text"]}>
            Have you already registered?{"   "}
            <NavLink className={styles["text_nav"]} to={LOGIN_ROUTE}>
              Login
            </NavLink>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Auth;
