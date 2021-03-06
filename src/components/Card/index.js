import styles from './Card.module.scss';



function Card(props){

  console.log(props);

    return(
        <div className={styles.card}>
        <div className={styles.favorite} onClick={props.onFavorite} >
        <img width={33} height={33} src="/img/heart-unliked.svg" alt="Unliked"/>
        </div>
        <img width={133} height={112} src={props.imageUrl} alt="doski"/>
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>{props.price}</b>
          </div>
          <button className="button" onClick={props.onPlus}>
            <img width={11} height={11} src="/img/add.png" alt="Add"/>
          </button>
        </div>
    </div>
    );

}
export default Card;

