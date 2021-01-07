import React from 'react';
import "./All.css";

function All({ all, selectType1, selectType2, adding, smallSize, selectMedium, bigSelect }) {
    return (
        <div className="All_wrapper">
          <img src={ all.photo } alt={ all.name }/>
          <p className="all_title">{ all.name }</p>
          <div className="pizza_param">
          <div className="weight_wrapper">
              <button onClick={() => selectType1(all.id)} className={ all.thin ? "typeBtn" : "small_btn" }>Тонкое</button>
              <button onClick={() => selectType2(all.id)} className={ all.trad ? "typeBtn2" : "big_btn" }>традиционное</button>
          </div>
          <div className="pizza_size">
              <button onClick={() => smallSize(all.id)} className={ all.size1 ? "smallSelect" : "smallest_btn" }>26см.</button>
              <button onClick={() => selectMedium(all.id)} className={ all.size2 ? "smallSelect" : "medium_btn" }>30см.</button>
              <button onClick={() => bigSelect(all.id)} className={ all.size3 ? "smallSelect" : "biger_btn" }>40см.</button>
          </div>
          </div>
          <div className="price_wrapper">
              <p className="price">от { all.cost } p</p>
              <button onClick={() => adding(all.id)} className="add_btn">+ Добавить <span className={ all.add === 0 ? "countNone" : "added" }>{ all.add }</span></button>
          </div>
        </div>
    )
}

export default All;
