import { HambergerMenu } from "iconsax-react";
import styles from "./navBar.module.scss";
import { useLocation } from "react-router-dom";
import { useContext, useMemo } from "react";
import { DrawerMenu } from "..";
import { AppContext } from "src/context/app.context";

export const NavBar = () => {
  const location = useLocation();
  const navTitle = useMemo(() => {
    return location.pathname.replace("-", " ").replace("/", " ");
  }, [location.pathname]);
  const { setOpenMenu } = useContext(AppContext);
  console.log(location);

  const bgColor = useMemo(() => {
    if (location.pathname === "/") {
      return styles["bg-transparent"];
    }
  }, [location.pathname]);

  return (
    <div className={`${styles["nav-bar"]} ${bgColor}`}>
      <div className={styles["nav-bar__container"]}>
        <button title="Abrir enu" onClick={() => setOpenMenu(true)}>
          <HambergerMenu size="25" color="#ffffff" />
        </button>
        <h1 className={styles["nav-bar--heading"]}>{navTitle}</h1>
      </div>
      <DrawerMenu />
    </div>
  );
};
