import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getForecast} from "../weather-api-utils/WeatherApiFunctions";

const initialState = {
    locationValue: '',
    forecast: {},
    current: {},
    astronomy: {},
}

export const fetchForecast = createAsyncThunk(
    'location/fetchForecast',
    async (argLocation) => {
        return await getForecast(argLocation);
    }
)

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: async (state, action) => {
            state.locationValue = action.payload;
        },
    },
    extraReducers: {
        [fetchForecast.pending]: (state) => {
        },
        [fetchForecast.fulfilled]: (state, action) => {
            state.forecast = action.payload;
        },
        [fetchForecast.rejected]: (state) => {
        },
    }
})

export const {setLocation} = locationSlice.actions

export default locationSlice.reducer