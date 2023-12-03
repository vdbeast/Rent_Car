import { createSlice } from "@reduxjs/toolkit";
import { deleteCar, fetchCars, getElementDyId } from "./api";

const catalogInitialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carSlice = createSlice({
  name: "cars",
  initialState: catalogInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(getElementDyId.pending, handlePending)
      .addCase(getElementDyId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = state.cars.map((car) =>
          car.id === action.payload.id ? action.payload : car,
        );
      })
      .addCase(deleteCar.pending, handlePending)
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = state.cars.filter((car) => car.id !== action.payload);
      })
      .addCase(deleteCar.rejected, handleRejected);
  },
});

export default carSlice.reducer;
