import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import carsReducer from "./advertSlice";

// const persistConfig = {
//     key: 'key',
//     storage,
//     whitelist: ['favorites'],
// };

// console.log('storage', storage)

// const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

export const store = configureStore ({
    reducer: carsReducer
})

// export const persistedStore = persistStore(store)