import Container from "../../UI/Container/Container";
import projectData from "../../db/project-db.json";
import styles from "./ProjectPage.module.css";
import ProjectSlider from "./ProjectSlider/ProjectSlider";
import DarkButton from "../../UI/DarkButton/DarkButton";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { initItemsLength, initSLides } from "../../store/slider/slider-actions";
import { useLocation, useNavigate } from "react-router-dom";
import { ALL_PROJECT_ROUTE, PROJECT_ROUTE } from "../../utils/constant_url";
import AllProject from "./AllProject/AllProject";

const ProjectPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectLocal = location.pathname === PROJECT_ROUTE;

  useEffect(() => {
    dispatch(initSLides(projectData));
    dispatch(initItemsLength(projectData.length));
  }, []);

  return (
    <Container className={styles.project}>
      <div className={styles["project-head"]}>
        <div className={styles["project-head_title"]}>
          I bring results. <br />
          My clients are proof.
        </div>
        {redirectLocal ? (
          <DarkButton
            title="View all projects"
            onClick={() => navigate(ALL_PROJECT_ROUTE)}
          />
        ) : (
          <DarkButton
            title="View slider projects"
            onClick={() => navigate(PROJECT_ROUTE)}
          />
        )}
      </div>
      {redirectLocal ? (
        <ProjectSlider projectData={projectData} />
      ) : (
        <AllProject projectData={projectData} />
      )}
    </Container>
  );
};

export default ProjectPage;
