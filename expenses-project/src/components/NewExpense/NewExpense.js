import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormVisible(false);
  };

  const cancelAddExpenseHandler = () => {
    setIsFormVisible(false);
  };

  const addExpenseButtonClickHandler = () => {
    setIsFormVisible(true);
  };

  return (
    <div className='new-expense'>
      {!isFormVisible ? (
        <button onClick={addExpenseButtonClickHandler}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAddExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
