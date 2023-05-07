import {createSlice} from '@reduxjs/toolkit'
import {languageChange} from "@/redux/langActions";

let languageS = null;
if (typeof window !== 'undefined') {

    languageS = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
}
const initialState = {
    language: languageS
}

const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(languageChange.fulfilled, (state, {payload}) => {
            state.language = JSON.stringify(payload)
        });

    }
})
export default langSlice.reducer
