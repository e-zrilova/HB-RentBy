import "./Header.scss";
import { DefaultMenu } from "../_ui/defaultMenu/DefaultMenu";
export function Header() {
  return (
    <header className="d-flex justify-between ">
      <div className="default-menu-wrapper">
        <DefaultMenu />
      </div>
    </header>
  );
}
