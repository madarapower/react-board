import React from 'react';
import styles from './Card.module.scss';

function Card({ onAdd, onRemove, onRemoveFromPage, decreaseQty, arr, onFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    if (!isAdded) {
      onAdd(arr);
    } else if (isAdded) {
      onRemoveFromPage(arr.id);
    }
  };

  return (
    <div className={styles.card}>
      <img width={133} height={112} src={arr.imageUrl} alt="doski" />
      <h5>{arr.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{arr.price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={15}
          height={15}
          src={isAdded ? '/img/btn-cheked.svg' : '/img/add.png'}
          alt="Add"
        />
      </div>
    </div>
  );
}
export default Card;
