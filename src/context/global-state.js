import React, { createContext, useReducer } from 'react';
import AppReducer from './app-reducer'
//initial state
const initialState = {
    transactions: []
}

//create context
const GlobalContext = createContext(initialState);

// global provider
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // action
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

    return (<GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>)
}

export {
    GlobalProvider,
    GlobalContext
}