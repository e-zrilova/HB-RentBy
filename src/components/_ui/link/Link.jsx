import { Icon } from "../../icon/icon";
import cx from "classnames";
import styles from "./Link.module.scss";

export function Link({ iconName, children, link, color, className }) {
  return (
    <a className={cx(styles.link, styles[color], className)} href={link}>
      {children}
      {iconName && <Icon iconName={iconName} />}
    </a>
  );
}
