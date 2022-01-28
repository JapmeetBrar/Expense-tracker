import React from "react";
import ExpenseForm from "./ExpenseForm";
import "../CSS/NewExpense.css";

function NewExpense(props) {
  //Adding 'id' attribute to newly entered expense from ExpenseForm.js
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
