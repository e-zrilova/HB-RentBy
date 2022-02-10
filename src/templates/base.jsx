import "./Base.scss";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
export function Base({ children }) {
  return (
    <div className="wrapper clear">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
