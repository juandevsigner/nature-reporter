import { useContext, useMemo } from "react";
import { ROUTER_SCHEMA } from "../../../router/router.schema";
import { AppContext } from "src/context/app.context";
import { ArrowRight2, CloseCircle } from "iconsax-react";
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
        {ROUTER_SCHEMA.map(({ path, title, subMenu, dropDown }) =>
          dropDown ? (
            <p key={path}>{title}</p>
          ) : (
            <a
              className={subMenu ? styles["sub-menu"] : ""}
              key={path}
              href={path}
            >
              {subMenu && <ArrowRight2 size="17" color="#37d67a" />} {title}
            </a>
          )
        )}
      </div>
    </div>
  );
};
