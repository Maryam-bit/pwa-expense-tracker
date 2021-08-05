import './App.css';
import Header from './component/header/header.component'
import Balance from './component/balance/balance.component'
import IncomeExpense from './component/income-expense/income-expense.component'
import AddTransaction from './component/add-transaction/add-transaction.component'
import TransactionHistory from './component/transaction-history/transaction-history.component'
import {GlobalProvider} from './context/global-state'
function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="add-tranaction-component">
              <IncomeExpense />
              <AddTransaction />
            </div>
          </div>
          <div className="col-md-6">
            <TransactionHistory />
          </div>
        </div>
      </div>

    </GlobalProvider>
  );
}

export default App;
