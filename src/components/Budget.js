import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget , totalEx } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { dispatch, currency } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (newBudget < totalEx ){
            alert("you cannot reduce budget value lower than spending")
            setNewBudget(budget)
        }else {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
