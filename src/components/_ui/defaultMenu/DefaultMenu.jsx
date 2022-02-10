import "./DefaultMenu.scss";
const defaultMenu = [
  {
    id: 1,
    title: "Новости",
  },
  {
    id: 2,
    title: "Размещение и тарифы ",
  },
  {
    id: 3,
    title: "Объявления на карте",
  },
  {
    id: 4,
    title: "Контакты",
  },
];
export function DefaultMenu() {
  return (
    <ul className="default-menu d-flex align-center">
      <li className="default-menu__item ">Главная</li>
      <li className="ddefault-menu__item ">Новости</li>
      <li className="default-menu__item ">Размещение и тарифы</li>
      <li className="default-menu__item ">Объявления на карте</li>
      <li className="default-menu__item ">Контакты</li>
    </ul>
  );
}
