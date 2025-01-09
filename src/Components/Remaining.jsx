import React, { useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import { MdCurrencyRupee } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const remaining = budget - totalExpenses;

    const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';

    useEffect(() => {
        if (remaining < 0) {
            toast.error("You have exceeded your budget!", {
                autoClose: 1000,
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
