import { useContext, useMemo } from "react";
import { ROUTER_SCHEMA } from "../../../router/router.schema";
import { Link } from "react-router-dom";
import { AppContext } from "src/context/app.context";
import { CloseCircle } from "iconsax-react";
import styles from "./drawerMenu.module.scss";

export const DrawerMenu = () => {
  const { openMenu, setOpenMenu } = useContext(AppContext);

  const toggleMenu = useMemo(() => {
    return openMenu ? styles["open-menu"] : styles["close-menu"];
  }, [openMenu]);

  return (
    <div className={`${styles["drawer-menu"]} ${toggleMenu}`}>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className={styles["drawer-menu__close-button"]}
      >
        <CloseCircle color="white" />
      </button>
      <div className={styles["drawer-menu__links"]}>
        {ROUTER_SCHEMA.map(({ path, title }) => (
          <Link key={path} to={path}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};
