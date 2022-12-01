import React, { useContext } from 'react';
import { MemeContext } from '../../providers/MemesContext';
import Card from '../Card/Card';

const UserCards = ({ userCards, openModal }) => {

    const { cardsArray } = useContext(MemeContext);

    return (
        userCards.map((el, index) => (
            <Card key={index} image={cardsArray[el]} callback={openModal} index={el} />
        ))
    )
}

export default UserCards;