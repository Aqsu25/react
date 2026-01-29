import { useState, useEffect } from 'react'

import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
  const [expense, setExpense] = useState(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(() => (
    localStorage.setItem("expenses", JSON.stringify(expense))

  ), [expense])

  const addExpense = (expense) => {
    setExpense((prev) =>
      [...prev, expense]
    )
  }

  const totalExpense = expense.reduce((sum, item) => sum + item.amount, 0)

  const deleteExpense = (id) => {
    setExpense((prev) => prev.filter((item) =>
      item.id != id
    ))

  }
  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h3 className="total">Total Expense: ₹{totalExpense.toFixed(2)}</h3>
      <ExpenseList expenses={expense} deleteExpense={deleteExpense} />
    </div>


  )
}

export default App
