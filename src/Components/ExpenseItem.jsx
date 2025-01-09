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
                </span>
                <TiDelete size='1.5em' onClick={() => onDelete(id)} style={{ cursor: 'pointer', color: 'red' }} />
                <FaRegEdit size='1.5em' onClick={() => onEdit(id)} style={{ cursor: 'pointer', color: 'blue' }} />
            </div>
        </li>
    );
};

export default ExpenseItem;
