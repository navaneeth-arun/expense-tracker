import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './Task1'

const ExpenseForm = ({ onAddExpense }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAddExpense = () => {
    const expense = {
      date,
      amount: parseFloat(amount),
      description,
    };
    onAddExpense(expense);
    setDate('');
    setAmount('');
    setDescription('');
  };

  return (
    <div>
        <div className="container">
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddExpense}>
        Add Expense
      </Button>
      </div>
    </div>
  );
};

export default ExpenseForm;
