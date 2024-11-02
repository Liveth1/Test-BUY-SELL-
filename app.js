var maxProfit = function (prices) {
  let buy__price = prices[0];
  console.log(7, 1, 5, 3, 6, 4);
  let profit = 0;
  console.log(profit);

  for (prices = i; i < prices.length; i++) {
    if (prices[i] < buy__price) {
      buy__price = prices[i];
    } else {
      current__profit = prices[i] - buy__price;
      profit = Math.max(current__profit, profit);
    }
  }
  return profit;
  console.log(profit);
};
