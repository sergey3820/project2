import React from 'react';
import "./Menu1Item.css";
import { NavLink } from "react-router-dom";

function Menu1Item() {
    return (
        <ul className="Menu1Item_wrapper">
        <li>
            <NavLink className="navLink" activeClassName="Menu1Item_btn_active"  to="/меню/Все">Все</NavLink>
        </li>
        <li className="Menu1Item_wrapper">
            <NavLink className="navLink" activeClassName="Menu1Item_btn_active" to="/меню/Мясные">Мясные</NavLink>
        </li>
        <li className="Menu1Item_wrapper">
            <NavLink className="navLink" activeClassName="Menu1Item_btn_active" to="/меню/Вегетарианская">Вегентарианская</NavLink>
        </li>
        <li className="Menu1Item_wrapper">
            <NavLink className="navLink" activeClassName="Menu1Item_btn_active" to="/меню/Гриль">Гриль</NavLink>
        </li>
        <li className="Menu1Item_wrapper">
            <NavLink className="navLink" activeClassName="Menu1Item_btn_active" to="/меню/Острые">Острые</NavLink>
        </li>
        <li className="Menu1Item_wrapper">
            <NavLink className="navLink" activeClassName="Menu1Item_btn_active" to="/меню/Закрытие">Закрытые</NavLink>
        </li>
        </ul>
    )
}

export default Menu1Item;
