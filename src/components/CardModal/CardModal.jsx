import React, { useContext } from 'react'
import { MemeContext } from '../../providers/MemesContext';

const CardModal = ({ cardIndex }) => {
    const { cardsArray } = useContext(MemeContext);
    return (
        <div className="card__modal">
            <img src={cardsArray[cardIndex]} alt="Card" />
        </div>
    )
}

export default CardModal;