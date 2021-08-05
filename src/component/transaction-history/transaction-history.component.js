import React, {useContext} from 'react'
import './transaction-history.styles.scss'
import TransactionList from '../transaction-list/tramsaction-list.component'
import { GlobalContext } from '../../context/global-state'

const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext)
    return (
        <div className="transaction-history">
            {
                transactions.map(transaction => (
                    <TransactionList transaction={transaction} key={transaction.id}/>
                ))
            }
        </div>
    )
}

export default TransactionHistory;