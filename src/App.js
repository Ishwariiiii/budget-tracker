import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import AddExpenseForm from './Components/AddExpenseForm';
import { AppProvider } from './Context/AppContext';
import { FaPlus } from "react-icons/fa";

const App = () => {
    const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);

    const toggleAddExpenseForm = () => {
        setShowAddExpenseForm(prevState => !prevState);
    };

    return (
        <AppProvider>
            <div className='container'>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginLeft: "auto"}}>
                    <h1 className='mt-3'>Budget Tracker</h1>
                    <FaPlus
                        onClick={toggleAddExpenseForm}
                        style={{
                            marginTop: "20px",
                            cursor: "pointer",
                            fontSize: "30px",
                            backgroundColor: "orange",
                            borderRadius: "50%",
                            height: "50px",
                            width: "50px",
                            padding: "10px",
                        }}
                    />
                </div>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>

                </div>

                {showAddExpenseForm && (
                    <div className='mt-3'>
                        <AddExpenseForm />
                    </div>
                )}

                <h3 className='mt-3'>Expenses</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App