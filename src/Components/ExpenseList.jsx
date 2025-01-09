import React, { useState, useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../Context/AppContext';
import AddExpenseForm from './AddExpenseForm';  

const ExpenseList = () => {
    const { expenses, dispatch } = useContext(AppContext);
    const [editingExpense, setEditingExpense] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);  

    const handleDeleteExpense = (id) => {
        dispatch({ type: 'DELETE_EXPENSE', payload: id });
    };

    const handleEditExpense = (id) => {
        const expenseToEdit = expenses.find((expense) => expense.id === id);
        setEditingExpense(expenseToEdit);  
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingExpense(null);
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
                        onEdit={handleEditExpense}
                    />
                ))}
            </ul>

            {isModalOpen && (
                <AddExpenseForm
                    closeModal={closeModal}
                    expenseToEdit={editingExpense} 
                />
            )}
        </div>
    );
};

export default ExpenseList;
