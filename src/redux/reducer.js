import { INCREASE_COUNT, initialCards, REMOVE_CARD, START_THE_GAME } from "../constants";
import { doubleAndMixCards } from "../utils";


const initialState = {
    cards: doubleAndMixCards(initialCards),
    count: 0,
    startTime: null,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_THE_GAME:
            return {...state, startTime: new Date()};
        case REMOVE_CARD:
            return {...state, cards: state.cards.filter(card => card !== action.payload)};
        case INCREASE_COUNT:
            return {...state, count: state.count + 1};
        default:
            return state;
    }
};