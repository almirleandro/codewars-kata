const solution = (str, ending) => {
  let index = 1;
  for (let i = ending.length; i > 0; i--) {
    if (str[str.length - index] !== ending[ending.length - index]) return false;
    index++;
  }
  return true;
}