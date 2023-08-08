import { configureStore } from '@reduxjs/toolkit'
import potentialCountriesReducer from './slices/potentialCountriesSlice'
import displayedContryReducer from './slices/displayCountrySlice'

export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedContryReducer
    }
})