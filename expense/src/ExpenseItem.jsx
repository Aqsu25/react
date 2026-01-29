import React from 'react'

function ExpenseItem({ item, deleteExpenses }) {

    return (
        <div className
        ="expense-item">
            <span>{item.title}</span>
            <span>{item.amount}</span>
            <button onClick={() => deleteExpenses(item.id)}>❌</button>
        </div>
    )

}

export default ExpenseItem