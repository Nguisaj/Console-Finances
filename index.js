function calculateFinancialAnalysis(data) { 
    // Initialize variables for analysis
    Var totalMonths = data.length;
    Var totalProfitLoss = 0;
    Var averageChange = 0;
    Var greatestIncrease = { amount: 0 };
    Var greatestDecrease = { amount: 0 };
   
 // Loop throughthe dataset to calculate totals and find increases/decreases
 for (var i =0; i < data.length; i++)  {
    var currentAmount = data[i][1];
    totalprofitLoss += currentAmount;
 } 

 const totalmonths = financialData.length;
 console.log("total number of months:", totalmonths);

 let nettotal = 0;
 for (let i = 0; i < financialData.length; i++) {
    nettotal += financialData[i][1];
 }
 console.log("net total amount of profit/losses:", nettotal);

 let totalchange = 0; //total change value is set to 0 in order to calculate total profit or loss average
 let previousvalue = financialData[0] [1];
 for ( let i = 1; i< financialData.length; i++) {
    let currentvalue =financialData[i][1];
    let change = currentvalue - previousvalue;
    totalchange += change;
    previousvalue = currentvalue;
 }
 const averagechange = totalchange / ( financialData.length - 1);
 console.log("average of changes in profit/losses:", averagechange);

let greatestincreasedate '';
let greatestincrease = 0;
for (let i = 1; i < financialData.length; i++) {
    let currentvalue = financialData[i][1];
    let previousvalue = financialData[i - 1][1];
    let increase = currentvalue - previousvalue;
    if (increase > greatestincrease) {
        greatestincrease = increase;
        greatestincreasedate = financialData[i][0];
    }
}
}
