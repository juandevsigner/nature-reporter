import { HambergerMenu } from "iconsax-react";
import styles from "./navBar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useContext, useMemo } from "react";
import { DrawerMenu } from "..";
import { AppContext } from "src/context/app.context";
import Logo from "../../../assets/Logo.svg";

export const NavBar = () => {
  const location = useLocation();
  const navTitle = useMemo(() => {
    const titleFormmater = location.pathname.split("/");
    if (titleFormmater.length > 2) {
      return titleFormmater[2].split("-").join(" ");
    }
    return titleFormmater[1].split("-").join(" ");
  }, [location.pathname]);
  const { setOpenMenu } = useContext(AppContext);
  const bgColor = useMemo(() => {
    if (location.pathname === "/") {
      return styles["bg-transparent"];
    }
  }, [location.pathname]);

  return (
    <div className={`${styles["nav-bar"]} ${bgColor}`}>
      <div className={styles["nav-bar__container"]}>
        <button title="Abrir menu" onClick={() => setOpenMenu(true)}>
          <HambergerMenu size="25" color="#ffffff" />
        </button>
        <h1 className={styles["nav-bar--heading"]}>{navTitle}</h1>
      </div>
      <Link className={styles["nav-bar--logo"]} to="/">
        <img src={Logo} alt="nature-logo" />
      </Link>
      <DrawerMenu />
    </div>
  );
};
