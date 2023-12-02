import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsReducer from "./advertSlice";

const persistConfig = {
    key: 'root',
    storage
};

const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

export const store = configureStore ({
    reducer: persistedCarsReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistedStore = persistStore(store)