import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../CSS/Expenses.css";

function Expenses(props) {
  return (
    <div>
      <div className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            onDeleteExpense={props.onDeleteExpense}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </div>
    </div>
  );
}

export default Expenses;
