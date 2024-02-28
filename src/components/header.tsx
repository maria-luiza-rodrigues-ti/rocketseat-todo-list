import IgniteLogo from "../assets/ignite-logo.svg";

import styles from "./header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Ignite Logo" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
