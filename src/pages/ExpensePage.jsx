import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionsList from '../components/TransactionsList';

const ExpensePage = () => {
    const [expenseTransactions, setExpenseTransactions] = useState([]);
    const handleAddExpenseTransaction = (transaction) => {
        setExpenseTransactions([...expenseTransactions, transaction]);
    };

    return (
        <div>
            <h1>Expense Page</h1>
            <TransactionForm
                type="Expense"
                onAddTransaction={handleAddExpenseTransaction}
            />
            <TransactionsList transactions={expenseTransactions} />
        </div>
    );
};

export default ExpensePage;