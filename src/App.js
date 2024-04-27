import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';
import './App.css';

function App() {
  // State that has an array of transactions
  const [transactions, setTransactions] = useState([
    { date: '2024-04-27', description: 'Groceries', category: 'Food', amount: 50 },
    { date: '2024-04-26', description: 'Dinner', category: 'Food', amount: 30 },
    { date: '2024-04-25', description: 'Shopping', category: 'Retail', amount: 100 },
  ]);

  // State that holds search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
     <div className="header">
        <header>Bank of Flatiron</header>
     </div>
      <main className='main-container'>
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <div className="search-bar-container">
        <input className='search-bar'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by description..."
        />
        </div>
        <TransactionTable className="Table" transactions={transactions} searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default App;
