import React, { useContext } from 'react';
import { MemeContext } from '../../providers/MemesContext';
import Card from '../Card/Card';

const UserCards = ({ userCards }) => {

    const { cardsArray } = useContext(MemeContext);

    return (
        userCards.map((el, index) => (
            <Card key={index} image={cardsArray[el]} callback={() => { }} />
        ))
    )
}

export default UserCards;