import styles from "./Header.module.scss";
import { HeaderMenu } from "../headerMenu/HeaderMenu";
import { LinkHeader } from "../_ui/linkHeader/LinkHeader";
import { Category } from "../categoryHeader/CategoryHeader";
import { Button } from "../_ui/button/Button";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <HeaderMenu />
          <LinkHeader />
          <div />
        </div>
        <div className={styles.block}>
          <div className={styles.container}>
            <img
              className={styles.logo}
              src="../assets/images/logo.png"
              alt="Логотип компании SDAEM.BY"
            ></img>
            <Category />
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
}
