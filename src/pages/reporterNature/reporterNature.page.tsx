import { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { AppContext } from "src/context/app.context";
import { NATURE_REPORTERS } from "src/schemas/natureReporters.schema";
import styles from "./reporterNature.module.scss";

const ReporterNaturePage = () => {
  const { setOpenMenu } = useContext(AppContext);

  useEffect(() => {
    setOpenMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles["reporter-nature"]}>
      {NATURE_REPORTERS.map(({ author, description, url }) => (
        <div className={styles["reporter-nature__yt-container"]} key={url}>
          <div className={styles["reporter-nature__yt-container--youtube"]}>
            <ReactPlayer controls url={url} width="100%" height="100%" />
          </div>
          <p className={styles["reporter-nature__yt-container--author"]}>
            {author}
          </p>
          <p className={styles["reporter-nature__yt-container--description"]}>
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReporterNaturePage;
