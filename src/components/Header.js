function Header({ onClickCart, cartItems }) {
  const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price, 0);
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="Logo" />
        <div>
          <h3 className="text-uppercase">Дпк-магазин</h3>
          <p className="opacity-5">Доски из ДПК</p>
        </div>
      </div>
      <div></div>
      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={25} height={30} src="/img/cart.png" alt="Cart" />
          <span>{totalPrice} руб.</span>
        </li>
      </ul>
    </header>
  );
}
export default Header;
