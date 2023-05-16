import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(expense);
  };

  const handleEdit = () => {
    onEdit(expense);
  };

  return (
    <ListItem>
      <ListItemText
        primary={expense.description}
        secondary={`Date: ${expense.date}, Amount: $${expense.amount}`}
      />
      <IconButton aria-label="edit" onClick={handleEdit}>
        <Edit />
      </IconButton>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <Delete />
      </IconButton>
    </ListItem>
  );
};

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const handleDeleteExpense = (expense) => {
    onDeleteExpense(expense);
  };

  const handleEditExpense = (expense) => {
    onEditExpense(expense);
  };

  return (
    <List>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          expense={expense}
          onDelete={handleDeleteExpense}
          onEdit={handleEditExpense}
        />
      ))}
    </List>
  );
};

export default ExpenseList;
