import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {removeElement} from "../store/winkelmand/slice";

const Winkelmandje = () => {
    const winkelmandState = useSelector(state => state.winkelmand);
    const dispatch = useDispatch();
    return (
        <div className='winkelmand' style={{textAlign:'center', color:'black', paddingTop:'200px'}}>
            {winkelmandState.products[0] !== undefined ?
                winkelmandState.products.map((item, key) =>
                    <li key={key}>
                        <a style={{fontWeight:'bold',marginBottom:0, marginTop:0, paddingRight:'1px', float:'left', paddingLeft:'30px', width:'10%', textAlign:'left'}}>{item.Naam}:</a>
                        <a style={{fontWeight:'lighter', float:"left", width:'10%'}}> x{item.Aantal}</a>
                        <a style={{float:'right', marginRight:'30px', textAlign:'right'}}>€{item.Prijs.toFixed(2)}</a>
                        <br/>
                        <a style={{float:'left', textAlign:'left', paddingLeft:'30px', paddingTop:'1px', width:'60%'}}>{item.Omschrijving}</a>
                        <button style={{float:'right', textAlign:'right', marginRight:'30px'}} onClick={() => dispatch(removeElement({item}))}>Remove</button>
                    </li>
                )
                : <p>Er is nog niks toegevoegd aan de winkelmand.</p>}
            {winkelmandState.products[0] !== undefined ?
                <div><p>Totale prijs: €{winkelmandState.totalePrijs.toFixed(2)}</p>
                    <Link to="/bestelling">Bestellen</Link></div>
                : <p>Keer terug naar de producten.</p>}
        </div>
    );
};
export default Winkelmandje;