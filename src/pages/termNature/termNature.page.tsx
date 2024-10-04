import { useContext, useEffect, useMemo } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AppContext } from "src/context/app.context";
import { useLocation } from "react-router-dom";
import { EXPLORER } from "src/schemas/termNature/explorer.schema";
import { MOM_DRAW } from "src/schemas/termNature/momDraws.schema";
import { FLOWERS } from "src/schemas/termNature/flowers.schema";
import { BUTTERFLIES } from "src/schemas/termNature/butterflies.schema";
import { ANIMAL_FARM } from "src/schemas/termNature/animalFarm.schema";
import "react-photo-view/dist/react-photo-view.css";
import styles from "./termNature.module.scss";

const TermNaturePage = () => {
  const { setOpenMenu } = useContext(AppContext);

  const location = useLocation();

  const listType = useMemo(() => {
    if (location.pathname.includes("exploraciones")) {
      return {
        phrase: EXPLORER.phrase,
        list: EXPLORER.list,
      };
    }
    if (location.pathname.includes("mama-ilustra")) {
      return {
        phrase: MOM_DRAW.phrase,
        list: MOM_DRAW.list,
      };
    }
    if (location.pathname.includes("flores")) {
      return {
        phrase: FLOWERS.phrase,
        list: FLOWERS.list,
      };
    }
    if (location.pathname.includes("butterflies")) {
      return {
        phrase: BUTTERFLIES.phrase,
        list: BUTTERFLIES.list,
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
    <PhotoProvider>
      <div className={styles["term-nature"]}>
        <header>
          <h1>{listType.phrase}</h1>
        </header>
        <main>
          {listType.list.map(({ description, url }, i) => (
            <PhotoView key={i} src={url}>
              <div key={url}>
                <img src={url} alt="animal-img" />
                <p>{description}</p>
              </div>
            </PhotoView>
          ))}
        </main>
      </div>
    </PhotoProvider>
  );
};

export default TermNaturePage;
