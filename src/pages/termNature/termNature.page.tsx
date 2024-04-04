import { useContext, useEffect, useMemo } from "react";
import { AppContext } from "src/context/app.context";
import { ANIMAL_FARM, EXPLORER, MOM_DRAW } from "src/schemas/termNature.schema";
import styles from "./termNature.module.scss";
import { useLocation } from "react-router-dom";

const TermNaturePage = () => {
  const { setOpenMenu } = useContext(AppContext);

  const location = useLocation();

  const listType = useMemo(() => {
    if (location.pathname === "/exploraciones") {
      return {
        phrase: EXPLORER.phrase,
        list: EXPLORER.list,
      };
    }
    if (location.pathname === "/mama-ilustra") {
      return {
        phrase: MOM_DRAW.phrase,
        list: MOM_DRAW.list,
      };
    }
    return {
      phrase: ANIMAL_FARM.phrase,
      list: ANIMAL_FARM.list,
    };
  }, [location.pathname]);

  useEffect(() => {
    setOpenMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className={styles["term-nature"]}>
      <header>
        <h1>{listType.phrase}</h1>
      </header>
      <main>
        {listType.list.map(({ description, url }) => (
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
