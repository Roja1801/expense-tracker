import React,{ useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{amount: 300 ,category: "Car",
    date: "2021-06-14",
    id: "ad19cd21-fa5d-47a1-8741-daf965579037",type: "Expense"},{amount: 90,
        category: "Salary",
        date: "2021-06-14",
        id: "884cab0e-0eed-4cec-b0b7-ce184a855022",
        type: "Income"},{amount: 100,
            category: "Extra income",
            date: "2021-06-14",
            id: "1c9f2504-0530-4c1d-888d-f5c8bc7cb9d9",
            type: "Income"},{amount: 200,
                category: "Clothes",
                date: "2021-06-15",
                id: "5684b633-07ad-407d-9b2f-f480dff8b464",
                type: "Expense"},{amount: 500,
                    category: "Investments",
                    date: "2021-06-14",
                    id: "d83f6b7b-53bc-4e0f-b065-9039172d5793",
                    type: "Income"},
                
                ];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    const addTransaction = (transaction) => dispatch({ type:'ADD_TRANSACTION', payload: transaction });
    
    const balance = transactions.reduce((acc, currVal) => {
        return(currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    }, 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}