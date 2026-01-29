import React, { useRef, useState } from 'react'

export default function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const titleRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount) {

            alert("Please fill the form")
            return;
        }
        const newExpense =
        {
            id: Date.now(),
            title,
            amount: parseFloat(amount)

        }
        onAddExpense(newExpense)
        setTitle("")
        setAmount("")
        titleRef.current.focus();
    }

    return (
        <div>

            <form className="expense-form" onSubmit={handleSubmit}>
                <input placeholder="Expense Title" ref={titleRef} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input placeholder="Amount ₹" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button type="submit" className='bg-gray-100'>Add</button>
            </form>

        </div>
    )
}
