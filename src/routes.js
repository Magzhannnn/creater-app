import AboutPage from "./pages/AboutPage/AboutPage";
import Auth from "./pages/Auth/Auth";
import BlogPage from "./pages/BlogPage/BlogPage";
import AllProject from "./pages/ProjectPage/AllProject/AllProject";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectSlider from "./pages/ProjectPage/ProjectSlider/ProjectSlider";
import ServicePage from "./pages/ServicePage/ServicePage";
import {
  ABOUT_ROUTE,
  ALL_PROJECT_ROUTE,
  BLOG_ROUTE,
  LOGIN_ROUTE,
  PROJECT_ROUTE,
  REGISTRATION_ROUTE,
  SERVICE_ROUTE,
} from "./utils/constant_url";

export const authRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];

export const publicRoutes = [
  {
    path: ABOUT_ROUTE,
    Component: AboutPage,
  },
  {
    path: SERVICE_ROUTE,
    Component: ServicePage,
  },
  {
    path: BLOG_ROUTE,
    Component: BlogPage,
  },
  {
    path: PROJECT_ROUTE,
    Component: ProjectPage,
  },
  {
    path: ALL_PROJECT_ROUTE,
    Component: ProjectPage,
  },
];
