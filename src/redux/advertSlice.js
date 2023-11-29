import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./api";

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
    }
})

export default carSlice.reducer;