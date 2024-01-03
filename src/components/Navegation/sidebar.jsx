import React from "react";
import classes from "../../styles/sidebar/sidebar.module.css";
import {
  FaCube,
  FaCashRegister,
  FaChartPie,
  FaChartBar,
  FaCircleUser,
} from "react-icons/fa6";

const SideBar = () => {
  //TODO:  Criar uma solucao para armazenar isto, algum pattern ou banco
  const itemsSidebar = [
    { id: 1, name: "Dashboard", icon: <FaCube /> },
    { id: 2, name: "Despesas", icon: <FaCashRegister /> },
    { id: 3, name: "Receitas", icon: <FaChartPie /> },
    { id: 4, name: "Investimentos", icon: <FaChartBar /> },
    { id: 4, name: "Configurações", icon: <FaCircleUser /> },
  ];

  const showitemListSidebar = itemsSidebar.map((item) => (
    <li key={item.id} className={classes.sidebar__item}>
      {item.icon}
      <span className={classes.sidebar__item__icon}>{item.name}</span>
    </li>
  ));

  return (
    <div className={classes.sidebar}>
      <h2 className={classes.sidebar__title}>FinMy</h2>
      <ul className={classes.sidebar__list}>{showitemListSidebar}</ul>
    </div>
  );
};

export default SideBar;
