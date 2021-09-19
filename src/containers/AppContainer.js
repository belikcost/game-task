import { connect } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import { increaseCount, removeCard, startTheGame } from "../redux/actions";

import { App } from "../components/App";



const AppContainer = ({cards, startTime, onStartTheGame, onRemoveCard, count, onIncreaseCount}) => {
    const [cardsImages, setCardsImages] = useState(null);

    const importCardsImages = useCallback(async () => {
        let results = {};

        for (const card of cards) {
            await import(`/src/img/${card}.svg`).then(result => results[card] = result.default);
        }

        return results;
    }, [cards]);

    useEffect(() => {
        if (!cardsImages) {
            importCardsImages().then(setCardsImages);
        }
    },[cardsImages, importCardsImages]);

    return (
        <App
            cards={cards}
            cardsImages={cardsImages}
            startTime={startTime}
            onStartTheGame={onStartTheGame}
            onRemoveCard={onRemoveCard}
            count={count}
            onIncreaseCount={onIncreaseCount}
        />
    );
};

const mapStateToProps = (state) => ({
    cards: state.cards,
    startTime: state.startTime,
    count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
    onStartTheGame: () => dispatch(startTheGame()),
    onRemoveCard: (card) => dispatch(removeCard(card)),
    onIncreaseCount: () => dispatch(increaseCount())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);