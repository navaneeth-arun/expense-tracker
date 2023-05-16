import React from 'react';
import { Pie } from 'react-chartjs-2';

const ExpenseChart = ({ expenses }) => {
  const getExpenseByCategory = () => {
    const categories = {};
    expenses.forEach((expense) => {
      if (categories[expense.category]) {
        categories[expense.category] += expense.amount;
      } else {
        categories[expense.category] = expense.amount;
      }
    });
    return Object.values(categories);
  };

  const data = {
    labels: Object.keys(getExpenseByCategory()),
    datasets: [
      {
        data: Object.values(getExpenseByCategory()),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8B5CFF',
          '#FF9F40',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8B5CFF',
          '#FF9F40',
        ],
      },
    ],
  };

  return <Pie data={data} />;
};

export default ExpenseChart;