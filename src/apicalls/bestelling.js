import axios from "axios";

//Api call voor het toevoegen van een bestellijn.
export const VoegBestellijnToe = async (lijn)=> {
    try {
        let result = await axios({
            method: 'post',
            url: 'http://localhost:3333/api/bestellijnen',
            dataType: "json",
            data: lijn
        });
        return result.data;
    } catch (error) {
        console.error(error);
    }
}
//Api call voor het toevoegen van een bestelling.
export const VoegBestellingToe = async (bestelling) => {
    try{
        let result = await axios({
            method: 'post',
            url: 'http://localhost:3333/api/bestellingen',
            dataType: "json",
            data: bestelling
        });
        return result.data;
    } catch (error) {
        console.error(error);
    }
}