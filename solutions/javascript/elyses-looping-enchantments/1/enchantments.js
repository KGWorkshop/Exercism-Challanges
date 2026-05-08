// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let numberOfCards = 0;
  stack.forEach((c) => {
    if (c === card) numberOfCards++;
  });
  return numberOfCards;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let numOfEvenOddCards = 0;
  for (const cards of stack) {
    if ((cards % 2 === 0 && type === true) || (cards % 2 !== 0 && type === false)) {
      numOfEvenOddCards++
    }; 
  };
  return numOfEvenOddCards;
}
