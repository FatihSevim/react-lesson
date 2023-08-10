import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        prods: [],
    },
    reducers: {
        setProds: (state, action) => {
            state.prods = action.payload;
        },
        removeProd: (state, action) => {
            const id = action.payload;
            let index = -1;
            for (let i = 0; i < state.prods.length; i++) {
                if (state.prods[i].id === id) {
                    index = i;
                }
            }
            if (index != -1) {
                state.prods.splice(index, 1);
            }
        },
    },
});

export const { setProds, removeProd } = productsSlice.actions;

export default productsSlice.reducer;
