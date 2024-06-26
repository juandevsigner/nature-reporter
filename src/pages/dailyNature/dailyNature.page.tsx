import { useContext, useEffect } from "react";
import { AppContext } from "src/context/app.context";
import styles from "./dailyNature.module.scss";

const DailyNaturePage = () => {
  const { setOpenMenu } = useContext(AppContext);

  useEffect(() => {
    setOpenMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["daily-nature"]}>
      <p>Daily Nature</p>
    </div>
  );
};

export default DailyNaturePage;
