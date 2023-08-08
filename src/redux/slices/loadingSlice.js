import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'leading',
    initialState: {value: false},
    reducers: {
        setLoading: (state, action) => {
            state.value = true
        },
        stopLoading: (state) => {
            state.value = false
        }
    }
})

export const { setLoading, stopLoading } = loadingSlice.actions

export const loadingSubscription = state => state.loadingStatus.value

export default loadingSlice.reducer
