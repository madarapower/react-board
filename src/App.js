import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React, { useState } from 'react';
import { Route, Router } from 'react-router-dom';
import { arr } from './components/Products';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);
    if (productExit) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log(cartItems);
  };
  const onRemove = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };
  const onRemoveFromPage = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const decreaseQty = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item,
        ),
      );
    }
  };

  const [cartOpened, setCartOpened] = React.useState(false);
  const [word, setWord] = useState('');

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          decreaseQty={decreaseQty}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} cartItems={cartItems} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Популярные Доски</h1>

          <div className="search-block ">
            <img width={17} height={17} src="/img/search.svg" alt="Search" />
            <input onChange={(e) => setWord(e.target.value)} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr
            .filter((arr) => arr.title.toLowerCase().includes(word.toLowerCase()))
            .map((arr) => (
              <Card
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus={() => console.log('Нажали на плюс')}
                onAdd={onAdd}
                onRemove={onRemove}
                onRemoveFromPage={onRemoveFromPage}
                decreaseQty={decreaseQty}
                arr={arr}
                key={arr.id}
                cartItems={cartItems}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
