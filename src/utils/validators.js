/**
 * Check if first name is valid.
 * @param {string} firstName - The first name of the user.
 * @returns {boolean} True if valid, false otherwise.
 */

export function isValidFirstName(firstName) {
  const nameRegex = /^[A-Za-z]+$/;
  return (
    nameRegex.test(firstName) && firstName.length >= 2 && firstName.length <= 50
  );
}

/**
 * Check if last name is valid.
 * @param {string} lastName - The last name of the user.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidLastName(lastName) {
  const nameRegex = /^[A-Za-z]+$/;
  return (
    nameRegex.test(lastName) && lastName.length >= 2 && lastName.length <= 50
  );
}

/**
 * Check if email is valid.
 * @param {string} email - The email of the user.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length >= 5 && email.length <= 100;
}

/**
 * Check if message is valid.
 * @param {string} message - The message of the user.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidMessage(message) {
  return message.length >= 1 && message.length <= 500;
}
