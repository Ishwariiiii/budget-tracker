import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { MdModeEdit } from "react-icons/md";

const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary d-flex justify-content-around'>
            <span>Budget: £{budget}</span>
            <MdModeEdit style={{height:"30px", width:"30px"}}/>
        </div>
    );
};

export default Budget;