import ExpenseDate from "./ExpenseDate";
import "../CSS/ExpenseItem.css";
import React from "react";

function ExpenseItem(props) {
  // Expense item takes as input an expense object and formats it for the web application
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}> </ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price"> $ {props.amount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
