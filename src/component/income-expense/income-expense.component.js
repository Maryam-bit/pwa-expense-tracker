import React,{useContext} from 'react'
import { GlobalContext } from '../../context/global-state'
import "./income-expense.styles.scss"

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2)
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item),0) * -1).toFixed(2)

    return (
        <div className="income-expense">
            <div className="row">
                <div className="col-md-6 income">
                    <span className="text">Income:</span>
                    <span className="amount">${income}</span>
                </div>
                <div className="col-md-6 expense">
                    <span className="text">Expense:</span>
                    <span className="amount">${expense}</span>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpense;