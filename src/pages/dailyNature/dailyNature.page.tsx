import ReactPlayer from "react-player";
import styles from "./dailyNature.module.scss";
import { DAILY_NATURE } from "src/schemas/dailyNature.schema";

const DailyNaturePage = () => {
  return (
    <div className={styles["daily-nature"]}>
      {DAILY_NATURE.map(({ author, description, url }) => (
        <div className={styles["daily-nature__yt-container"]} key={url}>
          <div className={styles["daily-nature__yt-container--youtube"]}>
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=pM4xZgRqy1Q"
              width="100%"
              height="100%"
            />
          </div>
          <p className={styles["daily-nature__yt-container--author"]}>
            {author}
          </p>
          <p className={styles["daily-nature__yt-container--description"]}>
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DailyNaturePage;
