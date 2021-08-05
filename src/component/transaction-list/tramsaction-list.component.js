import React,{useContext} from 'react'
import { GlobalContext } from '../../context/global-state'
import './transaction-list.styles.scss'

const TransactionList = ({ transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <>
            <div className='transaction-list'>
                <span className="text">{transaction.text}</span>
                <button className="arrow" onClick={() => deleteTransaction(transaction.id)}>&#10006;</button>
                <span className="amount">${transaction.amount}</span>
            </div>
        </>
    )
}

export default TransactionList;