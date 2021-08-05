import React,{useContext} from 'react'
import { GlobalContext } from '../../context/global-state'
import './balance.styles.scss'

const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((acc, item) => (acc += item ),0).toFixed(2)
    return (
        <div className="balance text-center">
            <p>CURRENT BALANCE:</p>
            <span>${total}</span>
        </div>
    )
}

export default Balance;