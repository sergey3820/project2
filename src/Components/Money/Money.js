import React, { useEffect, useState } from 'react';
import "./Money.css";

function Money({ money, closeMoney, setCloseMoney, addMoney, setAddMoney, moneyCom, setMoney, takeValue }) {

    
    return (
        <div className={closeMoney ? "money_wrapper" : "closeModalMoney"}>
            <i onClick={() => setCloseMoney(false)} class="far fa-times-circle closeBalance"></i>
            <p className="balance">Your balance: { money }p</p>
            <button onClick={() => setAddMoney(true)} className="addMoney">Add money</button>
            <form className={addMoney ? "plusMoney" : "plusMoneyNone"}>
                <input type="number" className="plusMoneyInput" onChange={takeValue}/>
                <button className="plusMoney_btn" onClick={moneyCom}>Submit</button>
            </form>
        </div>
    )
}

export default Money;
