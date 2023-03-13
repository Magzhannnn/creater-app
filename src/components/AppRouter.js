import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { ABOUT_ROUTE, LOGIN_ROUTE } from "../utils/constant_url";

const AppRouter = () => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
  }, [navigate]);

  if (isAuth === "true") {
    return (
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route path={path} key={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to={ABOUT_ROUTE} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {authRoutes.map(({ path, Component }) => (
        <Route path={path} key={path} element={<Component />} />
      ))}
      <Route path="/*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
