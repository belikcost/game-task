import { useState } from "react";

import { calculateDistance } from "../utils";

import './App.scss';


export const App = ({cards, cardsImages, startTime, onStartTheGame, onRemoveCard, count, onIncreaseCount}) => {
    const [firstCardIndex, setFirstCardIndex] = useState(null);
    const [secondCardIndex, setSecondCardIndex] = useState(null);
    const [resetTimeout, setResetTimeout] = useState();

    const resetCardsIndexes = () => {
        setFirstCardIndex(null);
        setSecondCardIndex(null);
        onIncreaseCount();
    }

    const onClick = (cardIndex) => {
        if (firstCardIndex === null) {
            setFirstCardIndex(cardIndex);
            setResetTimeout(setTimeout(() => resetCardsIndexes(), 5000));
        } else if (secondCardIndex === null && cardIndex !== firstCardIndex) {
            clearTimeout(resetTimeout)
            setSecondCardIndex(cardIndex);

            setTimeout(() => {
                if (cards[cardIndex] === cards[firstCardIndex]) {
                    onRemoveCard(cards[cardIndex]);
                }
                resetCardsIndexes();
            }, 500);
        }
    }

    return (
        <div className="app">
            {startTime ? (
                <>
                    {cards.length !== 0 ? (
                        <>
                            <div>
                                <p>Попытки: {count}</p>
                            </div>
                            <div className="area">
                                {cards.map((card, i) => (
                                    <div className="card" onClick={() => onClick(i)} key={i}>
                                        {(i === firstCardIndex || i === secondCardIndex) && (
                                            <img src={cardsImages[card]} alt={card}/>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="game-over">
                            <h4>Game over!</h4>
                            <div>
                                <p>Количество попыток: {count} из 18 минимальных</p>
                                <p>Время: {calculateDistance(startTime)}</p>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <button onClick={onStartTheGame}>Начать игру</button>
            )}
        </div>
    );
}