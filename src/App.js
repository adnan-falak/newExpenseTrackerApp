import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {TransactionList} from './components/TransactionList';
import {IncomeExpense} from './components/IncomeExpense';
import {AddTransaction} from './components/AddTransaction';
import {GlobalPorvider} from './context/GlobalState';


function App() {
  return (
    <GlobalPorvider>
      <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
      
    </div>
    </GlobalPorvider>
  );
}

export default App;
