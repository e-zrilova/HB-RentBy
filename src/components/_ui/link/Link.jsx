import clsx from "clsx";
import { Icon } from "../../icon/icon";
import styles from "./Link.module.scss";

export function Link({ iconName, children, link, color, className }) {
  return (
    <a className={clsx(styles.link, styles[color], className)} href={link}>
      {children}
      {iconName && <Icon iconName={iconName} />}
    </a>
  );
}
