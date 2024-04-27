import React, { useState } from 'react';

function TransactionTable({ transactions, searchTerm }) {
  // Check if transactions is undefined or null, and provide a default empty array
  const transactionList = transactions || [];

  // Filter transactions based on search term
  const filteredTransactions = transactionList.filter(transaction =>
    transaction && transaction.description &&
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // State to hold sorting option
  const [sortBy, setSortBy] = useState('');

  // Function to sort transactions
  const sortTransactions = (sortBy) => {
    if (sortBy === 'category') {
      // Sort transactions by category
      return filteredTransactions.slice().sort((a, b) => {
        if (a.category && b.category) {
          return a.category.localeCompare(b.category);
        }
        // Handle cases where category is undefined
        return 0;
      });
    } else if (sortBy === 'description') {
      // Sort transactions by description
      return filteredTransactions.slice().sort((a, b) => a.description.localeCompare(b.description));
    }
    // Default: return unsorted transactions
    return filteredTransactions;
  };

  // Function to handle sorting option change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className='transaction-table'>
      <label htmlFor="sortSelect">Sort by:</label>
      <select id="sortSelect" className='sort-content' value={sortBy} onChange={handleSortChange}>
        <option value="">None</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortTransactions(sortBy).map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
