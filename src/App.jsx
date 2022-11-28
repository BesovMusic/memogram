import Situation from './components/Situation/Situation';
import './index.css';
import { useContext, useEffect, useState } from 'react';
import UserCards from './components/UserCards/UserCards';
import { MemeContext } from './providers/MemesContext';
import Card from './components/Card/Card';

function App() {

  let [userCards, setUserCards] = useState([]);

  const { cardsArray } = useContext(MemeContext);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      let randomInt = getRandomInt(cardsArray.length);
      setUserCards(oldArray => [...oldArray, randomInt]);;
    }
    console.log(userCards);
  }, [])

  return (
    <div className='game__wrapper'>
      <Situation />
      <div className="cards__container">
        <UserCards userCards={userCards} />
      </div>
    </div>
  );
}

export default App;
