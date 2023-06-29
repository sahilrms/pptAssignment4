function arrangeCoins(n) {
    let completeRows = 0;
    let coins = n;
    let row = 1;
  
    while (coins >= row) {
      coins -= row;
      completeRows++;
      row++;
    }
  
    return completeRows;
  }
  

  const n = 5;
  
  const completeRows = arrangeCoins(n);
  console.log(completeRows); 
  