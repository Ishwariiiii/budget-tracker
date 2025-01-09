import React, { useState, useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../Context/AppContext';
import AddExpenseForm from './AddExpenseForm';  // Import AddExpenseForm

const ExpenseList = () => {
    const { expenses, dispatch } = useContext(AppContext);
    const [editingExpense, setEditingExpense] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);  // State to control modal visibility

    // Handle delete expense
    const handleDeleteExpense = (id) => {
        dispatch({ type: 'DELETE_EXPENSE', payload: id });
    };

    // Handle edit expense
    const handleEditExpense = (id) => {
        const expenseToEdit = expenses.find((expense) => expense.id === id);
        setEditingExpense(expenseToEdit);  // Store the expense details to edit
        setIsModalOpen(true);  // Open the modal
    };

    // Close the modal (called from AddExpenseForm)
    const closeModal = () => {
        setIsModalOpen(false);
        setEditingExpense(null);  // Reset the editingExpense state
    };

    return (
        <div>
            <ul className='list-group' style={{ backgroundColor: 'lightgray', color: 'black' }}>
                {expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                        onDelete={handleDeleteExpense}
                        onEdit={handleEditExpense}  // Pass the edit function
                    />
                ))}
            </ul>

            {/* Show the edit modal if an expense is being edited */}
            {isModalOpen && (
                <AddExpenseForm
                    closeModal={closeModal}
                    expenseToEdit={editingExpense}  // Pass the expense to edit
                />
            )}
        </div>
    );
};

export default ExpenseList;
