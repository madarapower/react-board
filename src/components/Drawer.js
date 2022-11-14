import { arr } from './Products';

function Drawer({ cartItems, onAdd, onRemove, decreaseQty, onClose }) {
  const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price, 0);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between mb-30 ">
          Корзина{' '}
          <img
            onClick={onClose}
            className="cu-p"
            width={25}
            height={25}
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {cartItems.map((item) => {
            const increase = item.price * item.qty;
            return (
              <div className="cartItem d-flex align-center mb-20">
                {/*<img className="mr-15" width={70} height={70} src="/img/doski/velvet.jpg"alt="doski"/> */}
                <div
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  className="cartItemImg"></div>
                <div className="mr-20 flex">
                  <p className="mb-5">{item.title}</p>

                  <div className="buttonqwe">
                    <b>{increase} руб.</b>
                    <div className="buttonplus">
                      <button
                        className="value-button"
                        id="decrease"
                        onClick={() => decreaseQty(item)}>
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button className="value-button" id="increase" onClick={() => onAdd(item)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  onClick={() => onRemove(item)}
                  className="revomeBtn"
                  width={32}
                  height={32}
                  src="/img/btn-remove.svg"
                  alt="Remove"
                />
              </div>
            );
          })}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex ">
              <span>Итого: </span>
              <div></div>
              <b>{totalPrice} руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img width={40} height={40} src="/img/arrow.png" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
