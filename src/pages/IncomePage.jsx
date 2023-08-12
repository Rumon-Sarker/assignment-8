import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionsList from '../components/TransactionsList';

const IncomePage = () => {
    const [incomeTransactions, setIncomeTransactions] = useState([]);

    const handleAddIncomeTransaction = (transaction) => {
        setIncomeTransactions([...incomeTransactions, transaction]);
    };
    return (
        <div>
            <h1>Income Page</h1>
            <TransactionForm
                type="Income"
                onAddTransaction={handleAddIncomeTransaction}
            />
            <TransactionsList transactions={incomeTransactions} />
        </div>
    );
};

export default IncomePage;