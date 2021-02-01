import {act} from "@testing-library/react";

const { createSlice } = require("@reduxjs/toolkit");

const orderSlice = createSlice({
    name: 'order',
    initialState: {
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
    },
    reducers: {
        addOrder: (state, action) => {
            state.VoorNaam = action.payload.VoorNaam;
            state.AchterNaam = action.payload.AchterNaam;
            state.Straat = action.payload.Straat;
            state.Nummer = action.payload.Nummer;
            state.Postcode = action.payload.Postcode;
            state.Stad = action.payload.Stad;
            state.Telefoonnummer = action.payload.Telefoonnummer;
            state.EmailAdres = action.payload.EmailAdres;
            state.TotalePrijs = action.payload.TotalePrijs;
            state.Producten = action.payload.Producten;
        },
        newOrder: (state, action) => {
            state.VoorNaam= '';
            state.AchterNaam='';
            state.Straat='';
            state.Nummer='';
            state.Postcode='';
            state.Stad='';
            state.Telefoonnummer='';
            state.EmailAdres='';
            state.TotalePrijs='';
            state.Producten = [];
        }
    }
});

export const {actions, reducer} = orderSlice;
export const { addOrder, newOrder} = actions;