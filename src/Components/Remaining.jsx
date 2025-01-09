import React, { useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import { MdCurrencyRupee } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    // Calculate remaining balance
    const remaining = budget - totalExpenses;

    // Determine the alert type based on remaining balance
    const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';

    // Show toast alert if remaining balance goes negative
    useEffect(() => {
        if (remaining < 0) {
            toast.error("You have exceeded your budget!", {
                // position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
        }
    }, [remaining]);

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: <MdCurrencyRupee /> {remaining}</span>
        </div>
    );
};

export default Remaining;
