import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaRegEdit } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';

const ExpenseItem = ({ id, name, cost, onDelete, onEdit }) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {name}
            <div>
                <span className='badge badge-primary badge-pill mr-3' style={{ backgroundColor: 'lightgreen', color: 'black' }}>
                    <MdCurrencyRupee /> {cost}
                </span> &nbsp;
                <TiDelete size='1.9em' onClick={() => onDelete(id)} style={{ cursor: 'pointer', color: 'red' }} />&nbsp;&nbsp;
                <FaRegEdit size='1.4em' onClick={() => onEdit(id)} style={{ cursor: 'pointer', color: 'blue' }} />
            </div>
        </li>
    );
};

export default ExpenseItem;
