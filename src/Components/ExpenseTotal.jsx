import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { MdCurrencyRupee } from "react-icons/md";

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent:  <MdCurrencyRupee /> {totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;