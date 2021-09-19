import { formatDistanceStrict } from "date-fns";
import { ru } from "date-fns/locale";

export const doubleAndMixCards = (cards) => cards.map(card => [card, card]).flat().sort(() => Math.random() - 0.5);
export const calculateDistance = (date) => formatDistanceStrict(date, new Date(), {locale: ru});