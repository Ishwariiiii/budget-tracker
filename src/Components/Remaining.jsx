import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { MdCurrencyRupee } from "react-icons/md";

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: <MdCurrencyRupee /> {budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;