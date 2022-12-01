import { useContext, useEffect, useState } from 'react';
import { MemeContext } from './providers/MemesContext';
import Situation from './components/Situation/Situation';
import UserCards from './components/UserCards/UserCards';
import './index.css';
import CardModal from './components/CardModal/CardModal';

function App() {

  const [userCards, setUserCards] = useState([]);
  const [usedCards, setUsedCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { cardsArray } = useContext(MemeContext);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getCard() {

  }

  function getHand() {
    let randomInt;
    let newHand = [];
    do {
      randomInt = getRandomInt(cardsArray.length);
      console.log(randomInt, newHand.includes(randomInt));
      if (newHand.includes(randomInt)) {
        continue
      } else {
        newHand.push(randomInt);
      }
      console.log(newHand);
    } while (newHand.length < 5);
    setUserCards(old => [...newHand]);
    setUsedCards(old => [...old, ...newHand])
  }

  useEffect(() => {
    console.log(userCards);
  }, [userCards])

  return (
    <div className='game__wrapper'>
      <Situation />
      {usedCards}
      {userCards.length < 5 && <button onClick={getHand}>Get Card</button>}
      <div className="cards__container">
        <UserCards userCards={userCards} openModal={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && <CardModal cardIndex={'1'} />}
    </div >
  );
}

export default App;
