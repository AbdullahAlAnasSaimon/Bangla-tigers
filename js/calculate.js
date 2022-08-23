function getInputValueById(elementID){
  const ExpenseField = document.getElementById(elementID);
  const ExpenseFieldString = ExpenseField.value;

  if(isNaN(ExpenseFieldString)){
    alert("provide a valid number");
    return 0;
  }
  const getExpenseInput = parseInt(ExpenseFieldString);

  if(isNaN(getExpenseInput) || getExpenseInput < 0){
    alert("provide valid number");
    return 0;
  }

  return getExpenseInput;
}

document.getElementById('btn-calculate').addEventListener('click', function(){
  const playerExpense = getInputValueById('player-expense-field');
  const playerList = document.getElementById('list-items').children.length;
  
  const playerExpenseTotal = playerList * playerExpense;
  
  const getPlayerExpenses = document.getElementById('set-player-expenses');
  getPlayerExpenses.innerText = playerExpenseTotal;
  
})

