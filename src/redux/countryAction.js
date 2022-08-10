import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET_COUNTRIES = 'GET_COUNRTIES';
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';

export const getCountries = createAsyncThunk(
    GET_COUNTRIES,
    async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        return data;
    }
);

export const searchCountry = createAsyncThunk(
    SEARCH_COUNTRY,
    async (title) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${title}`);
        const data = await response.json();
        return data;
    }
);