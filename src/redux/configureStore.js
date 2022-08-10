import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countryReducer';

const store = configureStore({
    reducer: {
        countries: countryReducer,
    },
});

export default store;