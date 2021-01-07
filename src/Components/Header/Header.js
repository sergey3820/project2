import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

function Header({ money, shop, setCloseMoney }) {

    function closee() {
        setCloseMoney(true);
    }

    return (
        <div className="header_wrapper">
            <div className="header1">
                <img src="https://simg.nicepng.com/png/small/946-9460986_clipart-of-pizza-if-and-breathing-pizza-triangle.png" alt="pizza_logo" className="pizza_logo" width="38px" height="38px"/>
                <div className="header_text">
                    <h1 className="header_title">REACT PIZZA</h1>
                    <p className="header_text">Most yamy pizzas in the space</p>
                </div>
            </div>
            <div className="header2">
                <button className="header_money_btn" onClick={closee}><NavLink to="/money">{ money }руб.</NavLink></button>
                <NavLink className="shop_ship" to="/Shop">
                <button className="header_shop_btn">
                <i class="fas fa-shopping-cart"></i>
                    <p className="shop_btn_text">{ shop.length }</p>
                </button>
                </NavLink>
            </div>
        </div>
    )
}   

export default Header;
