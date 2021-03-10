const check = (str, bracketsConfig) => {
  const stak = [];
  const symbols = str.split('');
  const isopen = (symbol) => bracketsConfig.some((pare) => pare[0] === symbol);
  const isclose = (symbol) => bracketsConfig.some((pare) => pare[1] === symbol);
  const isMatch = (s1 ,s2) => bracketsConfig.some(
    (pare) => (pare[0] === s1 && pare[1] === s2) || (pare[0] === s2 && pare[1] === s1)
  );

  for (const symbol of symbols) {
    const element = stak[stak.length - 1];

    if (isopen(symbol) && isclose(symbol) && stak.length === 0 ) {
      stak.push(symbol);
      continue;
    }

    if (isopen(symbol) && isclose(symbol) && element === symbol) {
      stak.pop();
      continue;
    }

    if (isopen(symbol))  {
      stak.push(symbol);
      continue;
    }

    if (isclose(symbol) && isMatch(symbol , element))   {
      stak.pop();
      continue;
    }

    if (isclose(symbol) && !isMatch(symbol , element))   {
      return false;
    }
  }
  return stak.length === 0;
};

module.exports = check;