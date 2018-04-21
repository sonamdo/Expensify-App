import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {//takes submission from ExpenseForm and submits it using addExpense
                props.dispatch(addExpense(expense));
                props.history.push('/');//redirects to front page after submitting expense
            }}
        />
    </div>
);

export default connect()(AddExpensePage);