import React, { useContext, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../Context/AppContext';
import AddExpenseForm from './AddExpenseForm';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext); 
    const [expenseToEdit, setExpenseToEdit] = useState(null); 
    const [modalOpen, setModalOpen] = useState(false);

    const handleEditExpense = (expense) => {
        setExpenseToEdit(expense); 
        setModalOpen(true); 
    };

    const closeModal = () => {
        setModalOpen(false);  
        setExpenseToEdit(null);  
    };

    return (
        <div>
            <ul className='list-group' style={{backgroundColor:"red", color:"black"}}>
                {expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                        onEdit={handleEditExpense} 
                    />
                ))}
            </ul>

            {modalOpen && (
                <AddExpenseForm
                    closeModal={closeModal}
                    expenseToEdit={expenseToEdit}  
                />
            )}
        </div>
    );
};

export default ExpenseList;
