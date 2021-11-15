function isLeapYear(x) {
  if (x % 400 === 0) return true;
  // True Because leap years

  if (x % 100 === 0) return false;
  // False Because not leap years

  return x % 4 === 0;
  // Then print years divisible by 4 are leap years
}
