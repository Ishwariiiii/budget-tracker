import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import AddExpenseForm from './Components/AddExpenseForm';
import { AppProvider } from './Context/AppContext';
import { FaPlus } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import Login from './auth/Login';
import { auth } from './firebase'; 
import { signOut } from 'firebase/auth';

const App = () => {
    const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const toggleAddExpenseForm = () => {
        setShowAddExpenseForm(prevState => !prevState);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true); 
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);  
            setIsLoggedIn(false);  
        } catch (error) {
            console.error("Error logging out", error);
        }
    };

    return (
        <AppProvider>
            <ToastContainer />
            {!isLoggedIn ? (
                <Login onLoginSuccess={handleLoginSuccess} />
            ) : (
                <div className='container'>
                    <div className="header">
                        <h1>Budget Tracker</h1>
                        <FaPlus
                        style={{height:"50px", width:"50px"}}
                            onClick={toggleAddExpenseForm}
                            className="fab"
                        />
                        <button onClick={handleLogout}>Log out</button>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <div className="card">
                                <Budget />
                            </div>
                        </div>
                        <div className='col-sm'>
                            <div className="card">
                                <Remaining />
                            </div>
                        </div>
                        <div className='col-sm'>
                            <div className="card">
                                <ExpenseTotal />
                            </div>
                        </div>
                    </div>

                    {showAddExpenseForm && (
                        <div className='mt-3'>
                            <AddExpenseForm closeModal={toggleAddExpenseForm} />
                        </div>
                    )}

                    <h3 className='mt-3'>Expenses</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            {/* <div className="expense-list">
                                <ExpenseList />
                            </div> */}
                              <ExpenseList />
                        </div>
                    </div>
                </div>
            )}
        </AppProvider>
    );
};

export default App;
