import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import "./Shop.css";
import ShopContent from './ShopContent/ShopContent';

function Shop({ shop, adding, clean, amount, showFinal, deletePizza, }) {
    return (
        <div className="shop_wrapper">
            <div className="shop">
            <div className="shop1">
                <img src="https://simg.nicepng.com/png/small/946-9460986_clipart-of-pizza-if-and-breathing-pizza-triangle.png" alt="pizza_logo" className="pizza_logo" width="38px" height="38px"/>
                <div className="header_text">
                    <h1 className="shop_title">REACT PIZZA</h1>
                    <p className="header_text">Most yamy pizzas in the space</p>
                </div>
                </div>
                <div className="shop_clos">
                    <NavLink to="/меню/Все">
                    <button className="closeBtn">
                    <i class="fas fa-times-circle close_icon"></i>
                    </button>
                    </NavLink>
                </div>
            </div>
            <ShopContent deletePizza={deletePizza} showFinal={showFinal} amount={amount} clean={clean} adding={adding} shop={shop} />
        </div>
    );
}

export default Shop;
