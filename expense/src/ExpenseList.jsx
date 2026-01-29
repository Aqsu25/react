import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses, deleteExpense }) {
    if (expenses.length === 0) {

        return <p className='text-red-400 text-center'>No Expense Yet!</p>
    }


    return (
        <div>
            <div className="expense-list">
                {
                    expenses.map((item) => (

                        <ExpenseItem key={item.id} item={item} deleteExpenses={deleteExpense} />
                    ))
                }
            </div>
        </div>
    )
}

export default ExpenseList