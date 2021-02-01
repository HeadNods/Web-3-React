import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import  { useHistory }  from "react-router-dom";
import {newOrder} from "../store/order/slice";
import {newStateWinkelmand} from "../store/winkelmand/slice";
const EindOverzicht = () => {
    const orderState = useSelector(state => state.order);
    console.log(orderState);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleHome=()=>{
        dispatch(newStateWinkelmand());
        dispatch(newOrder());
        history.push("/");
    }
    return(
        <div className='eindoverzicht'>
            <p style={{fontWeight:'bold', marginBottom:'1px'}}>Contactgegevens:</p>
            <p style={{minWidth:'500px'}}>Naam: {orderState.VoorNaam +" "+ orderState.AchterNaam}</p>
            <p style={{minWidth:'500px'}}>Adres: {orderState.Straat +" "+ orderState.Nummer}, {orderState.Postcode +", "+ orderState.Stad}</p>
            <p style={{minWidth:'500px'}}>E-mailadres: {orderState.EmailAdres}</p>
            <p style={{fontWeight:'bold', marginBottom:'1px'}}>Bestelling:</p>
            {orderState && orderState.Producten.map((product, key) =>
                    <li key={key}>
                        <p style={{marginBottom:'1px'}}>{product.Aantal}x {product.Naam}: {product.Prijs.toFixed(2)}</p>
                        <p style={{fontWeight:'lighter', marginTop:'1px'}}>{product.Omschrijving}</p>
                    </li>
            )}
            <p style={{maxWidth:'50%', margin:'30px'}}>Totaal: {orderState.TotalePrijs.toFixed(2)} euro.</p>
            <button onClick={()=>handleHome()}>Home</button>
        </div>
    );
};
export default EindOverzicht;