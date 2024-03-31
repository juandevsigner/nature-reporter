import { CallCalling, Facebook, ProfileCircle, Sms } from "iconsax-react";
import ALLogo from "../../../assets/aprende-libre-logo.png";
import CMLogo from "../../../assets/logo-cm.svg";
import NTLogo from "../../../assets/Logo.svg";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__container"]}>
        <img
          className={styles["footer__container--logo-1"]}
          src={NTLogo}
          alt="nature-reporter-logo"
        />
        <div className={styles["footer__container--divider-1"]} />
        <img
          className={styles["footer__container--logo-2"]}
          src={CMLogo}
          alt="charlotte-mason-logo"
        />
      </div>
      <div className={styles["footer__container"]}>
        <a target="__blank" href="https://aprendelibre.com.co/">
          <img
            className={styles["footer__container--logo-3"]}
            src={ALLogo}
            alt="aprende-libre-logo"
          />
        </a>
        <div className={styles["footer__container--divider-2"]} />
        <div className={styles["footer__container--info"]}>
          <p>
            <ProfileCircle size="17" color="#ffffff" variant="Bold" /> Elsa
            María Gutierrez
          </p>
          <p>
            <Sms size="17" color="#FFf" variant="Bold" />{" "}
            info@aprendelibre.com.co
          </p>
          <p>
            <CallCalling size="17" color="#FFf" variant="Bold" /> +57 3115800420
          </p>
          <a href="https://www.facebook.com/CharlotteMasonColombia">
            <Facebook variant="Bold" size="17" color="#ffffff" />{" "}
            /CharlotteMasonColombia
          </a>
        </div>
      </div>
    </footer>
  );
};
