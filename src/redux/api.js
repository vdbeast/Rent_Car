import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://64f31424edfa0459f6c64574.mockapi.io/";

export const fetchCars = createAsyncThunk(
    "cars/fetchAll",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/catalog")
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
