import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const AddExpenseForm = ({ closeModal, expenseToEdit }) => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [open, setOpen] = useState(true);

    // Populate the form with data if an expense is being edited
    useEffect(() => {
        if (expenseToEdit) {
            setName(expenseToEdit.name);
            setCost(expenseToEdit.cost.toString());
        }
    }, [expenseToEdit]);

    const onSubmit = (event) => {
        event.preventDefault();

        // Validate inputs
        if (!name || !cost) {
            toast.warning('Please fill both fields', {
                position: "top-right",
                autoClose: 100,
                style: {
                    lineHeight: '1.2',
                    fontSize: '15px',
                    backgroundColor: 'orange',
                    color: '#721c24',
                },
            });
            return;
        }

        const parsedCost = parseInt(cost);
        if (isNaN(parsedCost) || parsedCost <= 0) {
            toast.warning('Please enter a valid cost', {
                autoClose: 100,
            });
            return;
        }

        // Create expense object
        const expense = {
            id: expenseToEdit ? expenseToEdit.id : uuidv4(),
            name: name,
            cost: parsedCost,
        };

        // Dispatch either edit or add action
        if (expenseToEdit) {
            dispatch({
                type: 'EDIT_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }

        // Reset form and close modal
        setName('');
        setCost('');
        closeModal();
    };

    return (
        <Dialog
            open={open}
            keepMounted
            onClose={closeModal}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{expenseToEdit ? 'Edit Expense' : 'Add New Expense'}</DialogTitle>
            <DialogContent>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cost" className="form-label">Cost</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cost"
                            value={cost}
                            onChange={(event) => setCost(event.target.value)}
                        />
                    </div>
                    <DialogActions>
                        <Button onClick={closeModal} color="secondary">Cancel</Button>
                        <Button type="submit" color="primary">{expenseToEdit ? 'Update' : 'Save'}</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddExpenseForm;
