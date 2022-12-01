import React from 'react';
import cl from './Card.module.css';

const Card = ({ image, callback, index }) => {
    return (
        <div className={cl.card__container}>
            <img src={image} alt="Card" />
            <div className={cl.btn__container}>
                <button onClick={() => { callback() }}>Выбрать</button>
                <button onClick={() => { callback() }}>Просмотреть</button>
                <p>{index}</p>
            </div>
        </div>
    )
}

export default Card