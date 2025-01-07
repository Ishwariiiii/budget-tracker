import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../Context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <ul className='list-group'>
            {expenses.map((expense,index) => (
                <ExpenseItem key={index} id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    );
};

export default ExpenseList;