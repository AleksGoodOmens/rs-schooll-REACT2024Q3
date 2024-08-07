import { RootState } from '../..';

const cardSelector = (state: RootState) => state.cards;
const categoriesSelector = (state: RootState) => state.category;

export { cardSelector, categoriesSelector };
