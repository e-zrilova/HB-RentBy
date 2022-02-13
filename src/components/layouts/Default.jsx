import styles from "./Default.module.scss";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
export function Default({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  );
}
