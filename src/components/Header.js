function Header(){
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png"/>
        <div>
          <h3 className="text-uppercase">Дпк-магазин</h3>
          <p className="opacity-5">Доски из ДПК</p>
        </div>
      </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={20} height={25} src="/img/cart.png"/>
          <span>1200 руб.</span>
          </li>
        </ul>
      </header>
    );
}
export default  Header;