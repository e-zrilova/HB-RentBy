import clsx from "clsx";
import styles from "./Link.module.scss";

export function Link({ children, link, color, className }) {
  return (
    <a className={clsx(styles.link, styles[color], className)} href={link}>
      {children}
    </a>
  );
}
