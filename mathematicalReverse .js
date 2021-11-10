function solve(i) {
  let mr = i
    .split(/([*\+\-\/])/)
    .reverse()
    .join("");
  return mr;
}
