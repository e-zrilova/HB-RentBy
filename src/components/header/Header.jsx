import { HeaderMenu } from "../headerMenu/HeaderMenu";
import { LinkHeader } from "../linkHeader/LinkHeader";
import { CategoryHeader } from "../categoryHeader/CategoryHeader";
import { Button } from "../_ui/button/Button";
import styles from "./Header.module.scss";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <HeaderMenu />
          <LinkHeader />
        </div>
        <div className={styles.block}>
          <div className={styles.container}>
            <img
              className={styles.logo}
              src="../assets/images/logo.png"
              alt="Логотип компании SDAEM.BY"
            />
            <CategoryHeader />
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
}
