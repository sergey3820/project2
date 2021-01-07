import React from 'react';
import Pizza from './Pizza/Pizza';
import "./ShopContent.css";
import { NavLink } from "react-router-dom";

function ShopContent({ shop, adding, clean, amount, showFinal, deletePizza }) {
    return (
        <div className="shopContent_wrapper">
            <div className="korzina_wrapper">
                <div className="korzina">
                 <i class="fas fa-shopping-cart shopping"></i>
                 <p className="korzina_text">Корзина</p>
                </div>
                <div className="clean_korzina">
                <i class="fas fa-times"></i>
                <p className="clean_text" onClick={clean}>Очистить корзину</p>
                </div>
            </div>
            { shop.map((s) => (
                <Pizza deletePizza={deletePizza} adding={adding} sax={s} key={s.id} />
            )) }
            <div className="final_wrapper">
                <div className="final_text"><p className="count">Всего пицц: <span className="countBold">{ shop.length } шт</span></p></div>
                <div className="order">
                  <p className="order_txt">Сумма заказа: <span className="orange_order">{ amount } p</span></p>
                </div>
            </div>
            <div className="shopBtn_wraper">
               <NavLink to="меню/Все" className="backBtn"><i class="fas fa-chevron-left"></i> Вернутся назад</NavLink>
                <button onClick={showFinal} className="payBtn">Оплатить сейчас</button>
            </div>
        </div>
    )
}

export default ShopContent;
