import React, { useState } from 'react';
import ExpenseForm from './App';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (expense) => {
    setExpenses(expenses.filter((item) => item !== expense));
  };

  const editExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense === updatedExpense ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={deleteExpense}
        onEditExpense={editExpense}
      />
    </div>
  );
};

export default App;