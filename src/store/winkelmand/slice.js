import { createSlice } from '@reduxjs/toolkit';

const winkelmandSlice = createSlice({
    name:'winkelmand',
    initialState: {
        products: [],
        totalePrijs: 0.00
    },
    reducers: {
        addElement: (state, action) =>
        {
            let count=state.products.length;
            let exists = false;
            for(let i=0;i<count;i++)
            {
                if(state.products[i].Id===action.payload.product.Id){
                    state.products[i].Aantal += 1;
                    state.products[i].Prijs += action.payload.product.Prijs;
                    exists = true
                }
            }
            if(exists === false)
            {
                state.products.push({Id: action.payload.product.Id, Aantal: 1, Prijs: action.payload.product.Prijs, Naam: action.payload.product.Naam, Omschrijving: action.payload.product.Omschrijving, Eenheidsprijs: action.payload.product.Prijs});
            }
            state.totalePrijs = 0;
            console.log(state.products.length);
            for(let i = 0; i < state.products.length; i++) {
                console.log("Toe te voegen bedrag: " + state.products[i].Prijs);
                state.totalePrijs += state.products[i].Prijs;
            }
            console.log(state.totalePrijs);
        },
        removeElement:(state, action) =>
        {
            console.log(action.payload)
            for(let i = 0; i < state.products.length; i++)
            {
                console.log(state.products[i].Id + " en " + action.payload.item.Id)
                if(state.products[i].Id === action.payload.item.Id)
                {
                    if(state.products[i].Aantal === 1) {
                        state.totalePrijs -= state.products[i].Prijs;
                        state.products.splice(i, 1);
                    }
                    else {
                        state.totalePrijs -= state.products[i].Eenheidsprijs;
                        state.products[i].Prijs -= state.products[i].Eenheidsprijs;
                        state.products[i].Aantal -= 1;
                    }
                }
            }
        },
        newStateWinkelmand:(state, action) =>{
            state.products = [];
            state.totalePrijs = 0.00;
        }
    }
})
export const {actions, reducer} = winkelmandSlice;
export const { addElement, removeElement, newStateWinkelmand } = actions;