import Container from "../../UI/Container/Container";
import serviceDate from "../../db/service-db.json";
import styles from "./ServicePage.module.css";
import ServiceItem from "./ServiceItem/ServiceItem";

const ServicePage = () => {
  return (
    <Container className={styles.service}>
      <h1 className={styles["service-title"]}>
        Design that solves problems, one product at a time.
      </h1>
      <div className={styles["service-items"]}>
        {serviceDate.map((service) => (
          <ServiceItem {...service} key={service.img} />
        ))}
      </div>
    </Container>
  );
};

export default ServicePage;
