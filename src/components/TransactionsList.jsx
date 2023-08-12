import React from 'react';

const TransactionsList = ({ transactions }) => {
    return (
        <div>
            <div>
                <h2>Transactions List</h2>
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index}>
                            {transaction.type}: {transaction.amount} - {transaction.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TransactionsList;