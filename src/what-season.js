const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (date === undefined) { return 'Unable to determine the time of year!' }
  if (typeof date.getMonth !== 'function') { throw new Error('Invalid date!') }
  if (Object.getOwnPropertySymbols(date).length !== 0) throw new Error('Invalid date!');
 
  let monthDate = date.getMonth();

 if (monthDate == 0) {
    return 'winter'
  }
  if (monthDate == 1) {
    return 'winter'
  }
  if (monthDate == 2) {
    return 'spring'
  }
  if (monthDate == 3) {
    return 'spring'
  }
  if (monthDate == 4) {
    return 'spring'
  }
  if (monthDate == 5) {
    return 'summer'
  }
  if (monthDate == 6) {
    return 'summer'
  }
  if (monthDate == 7) {
    return 'summer'
  }
  if (monthDate == 8) {
    return 'autumn'
  }
  if (monthDate == 9) {
    return 'autumn'
  }
  if (monthDate == 10) {
    return 'autumn'
  }
  if (monthDate == 11) {
    return 'winter'
  }
}
module.exports = {
  getSeason
};
