import { useContext, useEffect } from "react";
import { AppContext } from "src/context/app.context";
import { ANIMAL_FARM } from "src/schemas/termNature.schema";
import styles from "./termNature.module.scss";

const TermNaturePage = () => {
  const { setOpenMenu } = useContext(AppContext);

  useEffect(() => {
    setOpenMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["term-nature"]}>
      <header>
        <h1>Frase</h1>
      </header>
      <main>
        {ANIMAL_FARM.map(({ description, url }) => (
          <div key={url}>
            <img src={url} alt="animal-img" />
            <p>{description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TermNaturePage;
