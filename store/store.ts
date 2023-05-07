import {configureStore} from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import langReducer from "../redux/langSlice"

const store = configureStore({
    reducer: {
        lang: langReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

