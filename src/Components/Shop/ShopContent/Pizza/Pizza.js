import React from 'react';
import "./Pizza.css";

function Pizza({ sax, adding, deletePizza }) {
    console.log(`SAX iS: ${sax}`)
    return (
        <div className="pizza_wrapper">
            <div className="pizza_name_wrapper">
            <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/679924dc-e4fd-45fd-aceb-be139f265425.jpg" alt="pizza" width="50px" height="50px"/>
              <div className="params_wrapper">
               <p className="pizzas_name">{ sax.anun }</p>
                <p className="pizzas_param">Тонкое тесто. 26см</p>
                </div>
            </div>
            <div className="pizzasCount_wrapper">
                <button className="minus_btn">-</button>
                <p className="pizzas_count">{ sax.count }</p>
                <button className="plus_btn" onClick={() => adding(sax.id)}>+</button>
            </div>
            <p className="pizzas_cost">{ sax.cost }p</p>
            <button className="deletePizza">
            <button onClick={() => deletePizza(sax.id)} className="deleteBtn">
            <i class="far fa-times-circle delete"></i>
            </button>
            </button>
        </div>
    )
}

export default Pizza;
