
function Drawer(){
    return (
        <div style={{display:'none'}} className="overlay">
        
        <div className="drawer">
          <h2 className=" d-flex justify-between mb-30 ">Корзина <img className="cu-p" width={15} height={15} src="/img/btn-remove.svg" alt="Remove"/></h2>

            <div className="items">
            <div className="cartItem d-flex align-center mb-20">
          {/*<img className="mr-15" width={70} height={70} src="/img/doski/velvet.jpg"alt="doski"/> */}
          <div 
            style={{backgroundImage:'url(/img/doski/velvet.jpg)'}} 
            className="cartItemImg">
            
          </div>
          <div className="mr-20 flex">
            <p className="mb-5">Террасная доска FAYNAG VELVET Венге</p>
            <b>295 руб.</b>
          </div>
          <img className="revomeBtn" width={32} height={32} src="/img/btn-remove.svg" alt="Remove"/>
          </div>
          <div className="cartItem d-flex align-center">
          {/*<img className="mr-15" width={70} height={70} src="/img/doski/velvet.jpg"alt="doski"/> */}
          <div 
            style={{backgroundImage:'url(/img/doski/velvet.jpg)'}} 
            className="cartItemImg">
            
          </div>
          <div className="mr-20 flex">
            <p className="mb-5">Террасная доска FAYNAG VELVET Венге</p>
            <b>295 руб.</b>
          </div>
          <img className="revomeBtn" width={32} height={32} src="/img/btn-remove.svg" alt="Remove"/>
          </div>
            </div>

            <div className="cartTotalBlock">
            <ul>
              <li className="d-flex ">
                <span>Итого: </span>
                <div></div>
                <b>5 000 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
              <img src="/image/arrow.svg" alt="Arrow"/> </button>
            

            </div>
        </div>
    </div>
    );

}
export default Drawer;
