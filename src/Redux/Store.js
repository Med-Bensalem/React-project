import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'; 
import userReducer from './Reducer/userReduce'; // Add the actual user reducer here

// Configuration for redux-persist
const persistConfig = {
    key: 'root',
    storage, // Use localStorage as the default storage option
    whitelist: ['user'], // State slices you want to persist
    blacklist: [] // State slices you do not want to persist
};

// Combine all your reducers
const rootReducer = combineReducers({
    user: userReducer, // Replace with actual reducers like 'userReducer'
});

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux devTools in development mode
});

// Create the persistor
export const persistor = persistStore(store);

export { store };
