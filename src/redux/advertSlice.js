import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, getElementDyId, updateFavoriteItem } from "./api";

const catalogInitialState = {
    items: [],
    isLoading: false,
    error: null
}

const handlePending = (state) => {
    state.isLoading = true
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload
}

const carSlice = createSlice({
    name: 'cars',
    initialState: catalogInitialState,

    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, handlePending)
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchCars.rejected, handleRejected)
            .addCase(getElementDyId.pending, handlePending)
            .addCase(getElementDyId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                })
            })
            .addCase(updateFavoriteItem.pending, handlePending)
            .addCase(updateFavoriteItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            isFavorite: action.payload.isFavorite 
                        };
                    }
                    return item;
                });
            })
            .addCase(updateFavoriteItem.rejected, handleRejected)
    }
})

export default carSlice.reducer;