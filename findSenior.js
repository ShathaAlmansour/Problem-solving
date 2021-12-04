function findSenior(list) {
  let x = 0;
  list.forEach((value) => {
    if (value.age > x) {
      x = value.age;
    }
  });
  const z = list.filter((value) => {
    return value.age === x;
  });
  return z;
}
