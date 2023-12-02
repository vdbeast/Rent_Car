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
                state.items = state.items.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                );
            })
            .addCase(updateFavoriteItem.pending, handlePending)
            .addCase(updateFavoriteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const responseData = action.payload;
        if (responseData && responseData.id) {
          const carId = responseData.id;
          const carToUpdate = state.items.find((item) => item.id === carId);
          if (carToUpdate) {
            carToUpdate.isFavorite = true;
          }
        } else {
          console.error('No valid id found in response:', responseData);
        }
      })
            .addCase(updateFavoriteItem.rejected, handleRejected)
    }
})

export default carSlice.reducer;