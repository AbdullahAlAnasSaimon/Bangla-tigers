// function added
function getInputValueById(elementID){
  const expenseField = document.getElementById(elementID);
  const expenseFieldString = expenseField.value;
// in validation to string
  if(isNaN(expenseFieldString)){
    alert("provide a valid number");
    return 0;
  }
  const getExpenseInput = parseInt(expenseFieldString);
// input validation to number
  if(isNaN(getExpenseInput) || getExpenseInput < 0){
    alert("provide valid number");
    return 0;
  }

  return getExpenseInput;
}
// add event handler to calculate button
document.getElementById('btn-calculate').addEventListener('click', function(){
  const playerExpense = getInputValueById('player-expense-field');
  const playerList = document.getElementById('list-items').children.length;
  
  const playerExpenseTotal = playerList * playerExpense;
  
  const getPlayerExpenses = document.getElementById('set-player-expenses');
  getPlayerExpenses.innerText = playerExpenseTotal;
  
})
// add event handler to calculate total button
document.getElementById('calculate-total').addEventListener('click', function(){
  const managerCost = getInputValueById('manager-cost-input');
  const coachCost = getInputValueById('coach-cost-input');
// set string to number
  const getPlayerExpenses = document.getElementById('set-player-expenses');
  const getPlayerExpensesString = getPlayerExpenses.innerText;
  const setPlayerExpense = parseInt(getPlayerExpensesString);
// calculate sub total
  const subTotalExpenses = document.getElementById('sub-total');
  subTotalExpenses.innerText = setPlayerExpense + managerCost + coachCost;
})