function isLanguageDiverse(list) {
  let Language = [0, 0, 0];

  list.forEach(function (person) {
    if (person.language === "Python") {
      Language[0]++;
    } else if (person.language === "Ruby") {
      Language[1]++;
    } else if (person.language === "JavaScript") {
      Language[2]++;
    }
  });
  let min = Math.min.apply(null, Language);
  let max = Math.max.apply(null, Language);

  if (max <= 2 * min) {
    return true;
  } else if (max > 2 * min) {
    return false;
  }
}
