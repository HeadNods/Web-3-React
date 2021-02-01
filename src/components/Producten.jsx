import React from 'react';
import { useDispatch } from 'react-redux';
import { addElement } from '../store/winkelmand/slice'; //removeOne pas nodig in het winkelmandje component.
const Producten = (props) => {
    const dispatch = useDispatch();
    const apiProducten = props.producten;
    console.log(apiProducten);
    console.log(apiProducten.length);
    return (
        <div className="producten">
            <p style={{padding: 0, fontSize:'xx-large', fontWeight:'bolder', textAlign:'left'}}>Beschikbare Producten:</p>
            {apiProducten && apiProducten.map((product, key) =>
                <li key={key}>
                    <a style={{fontWeight:'bold',marginBottom:0, marginTop:0, paddingRight:'1px', float:'left', paddingLeft:'30px', width:'30%', textAlign:'left'}}>{product.Naam}</a>
                    <a style={{float:'right', paddingRight:'30px', width:'30%', textAlign:'right'}}>Prijs: €{product.Prijs}</a>
                    <br/>
                    <a style={{float:'left', textAlign:'left', paddingLeft:'30px', paddingTop:'30px', width:'60%'}}>{product.Omschrijving}</a>
                    <a style={{float:'right', paddingRight:'25px', paddingTop:'15px'}}>
                        <button onClick={() => dispatch(addElement({product}))}>Voeg toe</button>
                    </a>
                </li>
            )}
        </div>
    );
};
export default Producten;