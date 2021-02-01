import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { addOrder, newOrder } from "../store/order/slice";
import {VoegBestellijnToe, VoegBestellingToe} from "../apicalls/bestelling";
import { useHistory } from "react-router-dom";

const handleBestelling = async (bestelling, dispatch, history) => {
    dispatch(newOrder());
    //Bestelling toevoegen:
    let insertBestelling = {
        VoorNaam: bestelling.VoorNaam,
        AchterNaam:bestelling.AchterNaam,
        Straat:bestelling.Straat,
        Nummer:bestelling.Nummer,
        Postcode:bestelling.Postcode,
        Stad:bestelling.Stad,
        Telefoonnummer:bestelling.Telefoonnummer,
        EmailAdres:bestelling.EmailAdres,
        TotalePrijs:bestelling.TotalePrijs
    };
    let result = await VoegBestellingToe(insertBestelling);
    console.log(result);
    //Bestellijnen toevoegen:
    for(let i=0; i<bestelling.Producten.length; i++){
        let lijn = {
            BestellingId: result.insertId,
            ProductId: bestelling.Producten[i].Id,
            Aantal:bestelling.Producten[i].Aantal,
            Prijs: bestelling.Producten[i].Prijs,
            Naam:bestelling.Producten[i].Naam
        }
        VoegBestellijnToe(lijn).then();
    }
    //Bestelling doorgeven aan store voor in het eindoverzicht:
    await dispatch(addOrder(bestelling));
    history.push('/bestelling/overview');
}

const Bevestiging = () => {
    const dispatch = useDispatch();
    const winkelmandState = useSelector(state => state.winkelmand);
    let bestelling = {
        VoorNaam: '',
        AchterNaam:'',
        Straat:'',
        Nummer:'',
        Postcode:'',
        Stad:'',
        Telefoonnummer:'',
        EmailAdres:'',
        TotalePrijs:'',
        Producten:[]
    };
    bestelling.TotalePrijs = winkelmandState.totalePrijs;
    bestelling.Producten = winkelmandState.products;
    let history = useHistory();
    const opBevestiging = () => handleBestelling(bestelling, dispatch, history);
    return(
        <div className='bestelling' style={{textAlign:'center', color:'black', paddingTop:'200px'}}>
            {bestelling.Producten && bestelling.Producten.map((item, key) =>
                <li key={key}>
                    <a style={{fontWeight:'bold',marginBottom:0, marginTop:0, paddingRight:'1px', float:'left', paddingLeft:'30px', width:'30%', textAlign:'left'}}>{item.Naam}</a>
                    <a style={{float:'right', paddingRight:'30px', width:'30%', textAlign:'right'}}>Prijs: €{item.Prijs.toFixed(2)}</a>
                </li>
            )};
            <p>Totale prijs: €{bestelling.TotalePrijs.toFixed(2)}</p>
            <div className="col-25">
                <label htmlFor="vnaam">Voornaam</label>
            </div>
            <div className="col-25">
                <input type="text" id="vnaam" name="voornaam" placeholder="Uw voornaam..." onChange={event => bestelling.VoorNaam = event.target.value}/>
            </div>
            <div className="col-25">
                <label htmlFor="anaam">Achternaam</label>
            </div>
            <div className="col-25">
                <input type="text" id="anaam" name="achternaam" placeholder="Uw achternaam..." onChange={event => bestelling.AchterNaam = event.target.value}/>
            </div>
            <div className="col-25">
                <label htmlFor="straat">Straat</label>
            </div>
            <div className="col-25">
                <input type="text" id="straat" name="straatnaam" placeholder="Uw straatnaam..." onChange={event => bestelling.Straat = event.target.value}/>
            </div>
            <div className="col-25">
                <label htmlFor="nummer">Nummer</label>
            </div>
            <div className="col-25">
                <input type="text" id="nummer" name="huisnummer" placeholder="Uw huisnummer..." onChange={event => bestelling.Nummer = event.target.value}/>
            </div>
            <div className="col-25">
                <label htmlFor="postcode">Postcode</label>
            </div>
            <div className="col-25">
                <input type="text" id="postcode" name="postcode" placeholder="Uw postcode..." onChange={event => bestelling.Postcode = event.target.value}/>
            </div>
            <div className="col-25">
                <label htmlFor="gemeente">Gemeente</label>
            </div>
            <div className="col-25">
                <input type="text" id="gemeente" name="gemeente" placeholder="Uw gemeente..." onChange={event => bestelling.Stad = event.target.value}/>
            </div>
            <div className="col-25">
                <label htmlFor="email">Email</label>
            </div>
            <div className="col-25">
                <input type="text" id="email" name="email" placeholder="Uw email..." onChange={event => bestelling.EmailAdres = event.target.value}/>
            </div>
            <div className="col-25">
                <label htmlFor="telefoonnummer">Telefoonnummer</label>
            </div>
            <div className="col-25">
                <input type="text" id="telefoonnummer" name="telefoonnummer" placeholder="Uw telefoonnummer..." onChange={event => bestelling.Telefoonnummer = event.target.value}/>
            </div>
            <div className="col-confirm">
                <button onClick={opBevestiging}>Bevestig bestelling</button>
            </div>
        </div>
    );
};
export default Bevestiging;