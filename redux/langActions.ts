import {createAsyncThunk} from "@reduxjs/toolkit";

type Language ={
    lang: string
}
export const languageChange = createAsyncThunk(
    'lang/change',
    async (lang: string) => {
            localStorage.setItem('language', lang)
    }
)

