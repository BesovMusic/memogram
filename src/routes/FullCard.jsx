import React, { useContext } from 'react'
import Card from '../components/Card/Card';
import { MemeContext } from '../providers/MemesContext';

const FullCard = ({ index }) => {
    const { cardsArray } = useContext(MemeContext)
    return (
        <Card image={cardsArray[index]} />
    )
}

export default FullCard;