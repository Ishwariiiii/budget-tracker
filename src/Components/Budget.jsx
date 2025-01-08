import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { MdModeEdit } from "react-icons/md";
import { toast } from 'react-toastify';
import { MdCurrencyRupee } from "react-icons/md";

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext); 
    const [isEditing, setIsEditing] = useState(false);
    const [newBudget, setNewBudget] = useState(budget);
    

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setNewBudget(budget); 
    };

    const handleSave = () => {
        dispatch({ type: 'SET_BUDGET', payload: newBudget }); 
        setIsEditing(false);
        toast.success("Budget saved successfully!",{
            autoClose: 100,
        });
    };

    const handleChange = (e) => {
        setNewBudget(e.target.value);
    };

    return (
        <div className='alert alert-secondary d-flex justify-content-around'>
            {isEditing ? (
                <>
                    <input
                        type="number"
                        value={newBudget}
                        onChange={handleChange}
                        className="form-control"
                        style={{ width: '150px' }}
                    />
                    <button className="btn btn-success" onClick={handleSave}>Save</button>
                    <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <span>Budget: <MdCurrencyRupee />{budget}</span>
                    <MdModeEdit
                        style={{ height: "25px", width: "25px", cursor: 'pointer', color:"green" }}
                        onClick={handleEditClick}
                    />
                </>
            )}
        </div>
    );
};

export default Budget;
