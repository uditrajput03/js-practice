let prices = [7,9,5,10,1,4]
var maxProfit = function(prices) {
            let profit = 0; let min = prices[0]
        for (let i = 0; i < prices.length; i++) {
            if (min > prices[i]){ 
            for (let j = i; j < prices.length; j++) {
                if (prices[j] > prices[i]){
                    let tProfit = prices[j] - prices[i];
                        if(tProfit > profit){
                            profit = tProfit;
                }
            }
         }
            min = prices[i];
        }
    };
    return profit;}
console.log(maxProfit(prices));