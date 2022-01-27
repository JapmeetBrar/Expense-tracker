import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../CSS/Expenses.css";

function Expenses(props) {
  return (
    <div>
      <div className="expenses">
        {props.items.map ((expense) => (
            <ExpenseItem

            > </ExpenseItem>
        ))}
      </div>
    </div>
  );
}

export default Expenses;

// def add(a, b)
//  c = a + b
//  return c

// React
// def add(props)
//  c = props.a + props.b
//  return c

// for i in range(...)

//rfce


