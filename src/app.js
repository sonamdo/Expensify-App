import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { sortByDate, sortByAmount, setTextFilter, setEndDate, setStartDate } from './actions/filters'; 
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

//addExpense
//add another Expense
//setTextFilter
//getVisibleExpense

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);  
})

store.dispatch(addExpense({description:'rent', amount:1500}));
store.dispatch(addExpense({description:'food', amount:420}));
store.dispatch(addExpense({description:'internet', amount:1095}));

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));