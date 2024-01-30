import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const handleCurrChange = (e) =>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    }
    return (
        <select className="bg-info p-2" onChange={handleCurrChange}>
            <option default value="£" name="Pound">£ Pound</option>
            <option value="$" name="Dollar">$ Dollar</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Ruppee">₹ Ruppee</option>
        </select>
    );
};
export default Currency;