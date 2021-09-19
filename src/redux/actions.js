import { INCREASE_COUNT, REMOVE_CARD, START_THE_GAME } from "../constants";


export const startTheGame = () => ({type: START_THE_GAME});
export const removeCard = (data) => ({type: REMOVE_CARD, payload: data});
export const increaseCount = () => ({type: INCREASE_COUNT});