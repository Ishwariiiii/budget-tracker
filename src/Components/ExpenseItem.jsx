import React from 'react'; 
import { TiDelete } from 'react-icons/ti';
import { FaRegEdit } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

const ExpenseItem = (props) => {
    const { onEdit, id, name, cost } = props;

    const handleDeleteExpense = () => {
        props.onDelete(id);
    };

    const handleEditExpense = () => {
        onEdit({ id, name, cost }); 
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {name}
            <div>
                <span className='badge badge-primary badge-pill mr-3' style={{backgroundColor:"lightgreen", color:"black"}}>
                <MdCurrencyRupee /> {cost}
                </span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
                <FaRegEdit size='1.5em' onClick={handleEditExpense} />
            </div>
        </li>
    );
};

export default ExpenseItem;
