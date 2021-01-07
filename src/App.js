import React, { useEffect, useState } from 'react';
import "./App.css";
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import All from "./Components/Menu/Menu1/All/All";
import Meat from './Components/Menu/Menu1/Meat/Meat';
import Vegetables from './Components/Menu/Menu1/Vegetables/Vegetables';
import Gril from './Components/Menu/Menu1/Gril/Gril';
import Spicy from './Components/Menu/Menu1/Spicy/Spicy';
import Hidden from './Components/Menu/Menu1/Hidden/Hidden';
import Shop from './Components/Shop/Shop';
import Money from './Components/Money/Money';
import Footer from './Components/Footer/Footer';

function App() {

    const [pizza, setPizza] = useState([
        { id: 1, add: 0, thin: false, trad: false, name: "Цезарь", size1: false, size2: false, size3: false, cost: 445, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/b3c4109c40e24b618c47562a93c992cf_292x292.jpeg" },
        { id: 2, add: 0, thin: false, trad: false, name: "Нежный лосось", size1: false, size2: false, size3: false, cost: 450, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/f5efd84790134654b9eb84c89f2c9ca8_292x292.jpeg" },
        { id: 3, add: 0, thin: false, trad: false, name: "Сырная",size1: false, size2: false, size3: false, cost: 245, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/03e6638d-0185-415f-9781-bc906e3fd3f5.jpg" },
        { id: 4, add: 0, thin: false, trad: false, name: "Ветчина и сыр", size1: false, size2: false, size3: false, cost: 300, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/679924dc-e4fd-45fd-aceb-be139f265425.jpg" },
        { id: 5, add: 0, thin: false, trad: false, name: "Ветчина и грибы", size1: false, size2: false, size3: false, cost: 350, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_292x292.jpeg" },
        { id: 6, add: 0, thin: false, trad: false, name: "Пепперони", size1: false, size2: false, size3: false, cost: 400, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1df00c72-f3fd-4d4e-8537-3ff74035c2dc.jpg" },
        { id: 7, add: 0, thin: false, trad: false, name: "Чизбургер-пицца", size1: false, size2: false, size3: false, cost: 400, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/8a813e3b734e457c848a60fc70a100d5_292x292.jpeg" },
        { id: 8, add: 0, thin: false, trad: false, name: "Аррива", size1: false, size2: false, size3: false, cost: 395, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/12faf8763c694ce7a51afe75401d19d6_292x292.jpeg" },
        { id: 9, add: 0, thin: false, trad: false, name: "Запеченное яблоко", size1: false, size2: false, size3: false, cost: 345, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/d547ea961df140da9e7745665c8f26ce_292x292.jpeg" },
        { id: 10, add: 0, thin: false, trad: false, name: "Пицца-пирог", size1: false, size2: false, size3: false, cost: 345, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/3327d3dd-1feb-443f-97b6-731fa8e64fac.jpg" },
        { id: 11, add: 0, thin: false, trad: false, name: "Маргарита", size1: false, size2: false, size3: false, cost: 345, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_292x292.jpeg" },
        { id: 12, add: 0, thin: false, trad: false, name: "Овощи и грибы", size1: false, size2: false, size3: false, cost: 395, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/7a497170e99a435f8535f33c3ebaddc3_292x292.jpeg" },
        
    ]);

    useEffect(() => {
       setTimeout(() => {
           setLoading(true);
       }, 2000)
       console.log('Starting');
    }, []);

    const [shop, setShop] = useState([]);
    const [amount, setAmount] = useState(0);
    const [money, setMoney] = useState(5000);
    const [closeMoney, setCloseMoney] = useState(true);
    const [addMoney, setAddMoney] = useState(false);
    const [inputValue, setInputValue] = useState();
    const [loading, setLoading] = useState(false);


  function selectType1(id) {
     setPizza(pizza.map(p => {
         if (p.id === id) {
             p.thin = !p.thin;
             p.trad = false;
         }
         return p
     }))
  }

  function selectType2(id) {
      setPizza(pizza.map(p1 => {
          if (p1.id === id) {
              p1.trad = !p1.trad;
              p1.thin = false;
          }
          return p1
      }));
  }

  function adding(id) {
     setPizza(pizza.map(ad => {
         if (ad.id === id) {
             ad.add++;
             addShop(ad);
             /*showB();*/
         }
         return ad;
     }))
  }


  function addShop(a) {
      setShop([
          ...shop,
          { id: a.id, anun: a.name, count: a.add, cost: a.cost }
      ])
  }

  useEffect(() => {
     setPizza([
        { id: 1, add: 0, thin: false, trad: false, name: "Цезарь", size1: false, size2: false, size3: false, cost: 445, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/b3c4109c40e24b618c47562a93c992cf_292x292.jpeg" },
        { id: 2, add: 0, thin: false, trad: false, name: "Нежный лосось", size1: false, size2: false, size3: false, cost: 450, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/f5efd84790134654b9eb84c89f2c9ca8_292x292.jpeg" },
        { id: 3, add: 0, thin: false, trad: false, name: "Сырная",size1: false, size2: false, size3: false, cost: 245, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/03e6638d-0185-415f-9781-bc906e3fd3f5.jpg" },
        { id: 4, add: 0, thin: false, trad: false, name: "Ветчина и сыр", size1: false, size2: false, size3: false, cost: 300, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/679924dc-e4fd-45fd-aceb-be139f265425.jpg" },
        { id: 5, add: 0, thin: false, trad: false, name: "Ветчина и грибы", size1: false, size2: false, size3: false, cost: 350, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_292x292.jpeg" },
        { id: 6, add: 0, thin: false, trad: false, name: "Пепперони", size1: false, size2: false, size3: false, cost: 400, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1df00c72-f3fd-4d4e-8537-3ff74035c2dc.jpg" },
        { id: 7, add: 0, thin: false, trad: false, name: "Чизбургер-пицца", size1: false, size2: false, size3: false, cost: 400, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/8a813e3b734e457c848a60fc70a100d5_292x292.jpeg" },
        { id: 8, add: 0, thin: false, trad: false, name: "Аррива", size1: false, size2: false, size3: false, cost: 395, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/12faf8763c694ce7a51afe75401d19d6_292x292.jpeg" },
        { id: 9, add: 0, thin: false, trad: false, name: "Запеченное яблоко", size1: false, size2: false, size3: false, cost: 345, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/d547ea961df140da9e7745665c8f26ce_292x292.jpeg" },
        { id: 10, add: 0, thin: false, trad: false, name: "Пицца-пирог", size1: false, size2: false, size3: false, cost: 345, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/3327d3dd-1feb-443f-97b6-731fa8e64fac.jpg" },
        { id: 11, add: 0, thin: false, trad: false, name: "Маргарита", size1: false, size2: false, size3: false, cost: 345, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_292x292.jpeg" },
        { id: 12, add: 0, thin: false, trad: false, name: "Овощи и грибы", size1: false, size2: false, size3: false, cost: 395, com: false, photo: "https://dodopizza-a.akamaihd.net/static/Img/Products/7a497170e99a435f8535f33c3ebaddc3_292x292.jpeg" },
    ])
    localStorage.setItem('money', money);
  }, [money]);

  const showFinal = (e) => { 
     let anySum = 0;
     for (let i = 0; i < shop.length; i++) {
         setAmount(anySum = anySum + shop[i].cost);
         console.log(anySum);
     }
     setMoney(prev => prev - anySum);
     if (money < 0) {
        alert('ERROR !!!');
    }
    setShop([]);
     console.log(anySum);
     console.log(`my money now: ${money}`);
 }

 function deletePizza(id) {
    setShop(shop.filter(show => show.id !== id))
 }

 /*function showB() {
     let anySum2 = 0;
     for (let j = 0; j < shop.length; j++) {
         setAmount(anySum2 = anySum2 + shop[j].cost);
     }
 } */


  console.log(pizza);
  console.log(shop);

  function smallSize(id) {
     setPizza(pizza.map(smal => {
         if (smal.id === id) {
             smal.size1 = !smal.size1;
             smal.size2 = false;
             smal.size3 = false;
             console.log(id);
         }
         return smal;
     }))
  }

  function selectMedium(id) {
      setPizza(pizza.map(medium => {
          if (medium.id === id) {
              medium.size2 = !medium.size2;
              medium.size1 = false;
              medium.size3 = false;
          }
          return medium;
      }))
  }

  function bigSelect(id) {
      setPizza(pizza.map(big => {
          if (big.id === id) {
              big.size3 = !big.size3;
              big.size1 = false;
              big.size2 = false;
          }
          return big;
      }))
  }

  function clean() {
      setShop([]);
  }

  const moneyCom = (e) => {
      e.preventDefault();
      console.log('working');
      setMoney(parseInt(money) + parseInt(inputValue));
      if (inputValue === 0) {
          alert("error");
      }
      setInputValue();
      setAddMoney(false);
  }

  function takeValue(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
}

    return (
        <BrowserRouter>
         { loading ? (
             <div className="parentApp">
         <div className="app_wrapper">
            <Route exact path="/money" render={() => <Money takeValue={takeValue} moneyCom={moneyCom} addMoney={addMoney} setAddMoney={setAddMoney} setCloseMoney={setCloseMoney} closeMoney={closeMoney} money={money} setMoney={setMoney} />} />
            <Route exact path="/shop" render={() => <Shop deletePizza={deletePizza} showFinal={showFinal} amount={amount} clean={clean} shop={shop} adding={adding} />} />
            <div className="link1">
           <Header money={money} shop={shop} setCloseMoney={setCloseMoney} />
           <Menu />
           <div className="allWrapper">  
           <Route path="/меню/Все" exactb render={() => pizza.map((el) => (<All addShop={addShop} bigSelect={bigSelect} selectMedium={selectMedium} smallSize={smallSize} adding={adding} selectType2={selectType2} selectType1={selectType1} all={el} />))} />
           </div>
           <Route path="/меню/Мясные" exact render={() => <Meat />} />
           <Route path="/меню/Вегетарианская" exact render={() => <Vegetables />} />
           <Route path="/меню/Гриль" exact render={() => <Gril />} />
           <Route path="/меню/Острые" exact render={() => <Spicy />} />
           <Route path="/меню/Закрытие" exact render={() => <Hidden />} />
           </div>
        </div>
        <Footer />
        </div>
        ) : <div className="loadingWrapper">
            <div className="loader_container">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </div> }
        </BrowserRouter>
    );
}

export default App;
