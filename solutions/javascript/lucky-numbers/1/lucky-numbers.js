// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 *
 * twoSum Pseudocode
 * FUNCTION twoSum (array1, array2)
 *   SET sum TO Number(array1.join("")) + Number(array2.join(""))
 *   RETURN sum
 * ENDFUNCTION
 */
export function twoSum(array1, array2) {
  let sum = Number(array1.join("")) + Number(array2.join(""));
  return sum;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 *
 * luckyNumber Pseudocode
 * FUNCTION luckyNumber (value)
 *   SET pali TO String(value)
 *   SET result TO ""
 *   FOR i FROM LENGTH OF pali-1 DOWN TO 0 DO
 *   	APPEND pali[i] TO result
 *   ENDFOR
 *   
 *
 *   IF result IS EQUAL TO pali THEN
 *   	RETURN true
 *   ELSE
 *   	RETURN false
 *   ENDIF
 * ENDFUNCTION
 */
export function luckyNumber(value) {
  let pali = String(value);
  let result = "";
  for(let i = 0; i < pali.length; i++) {
    result = pali[i] + result;
  }

  if (result === pali) {
    return true;
  } else {
    return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 *
 * errorMessage Pseudocode
 * FUNCTION errorMessage(input)
 *   SET num TO Number(input)
 *   SET emptyString TO ''
 *   IF input IS EQUAL TO emptyString OR NULL OR UNDEFINED THEN
 *     RETURN 'Required field'
 *   ELSE IF Number.isNaN(num) OR num IS EQUAL TO 0 THEN
 *     RETURN 'Must be a number besides 0'
 *   ELSE
 *     RETURN emptyString
 */
export function errorMessage(input) {
  const num = Number(input);
  let emptyString = ''; 
  if (input === emptyString || input === null || input === undefined) {
    return 'Required field';
  } else if (Number.isNaN(num) || num === 0) {
    return 'Must be a number besides 0';
  } else {
    return emptyString;	
  }
}
