import {configureStore} from '@reduxjs/toolkit'
import goalReducer from '../features/goals/goalSlice'
import authReducer from '../features/auth/authSlice'


export const store = configureStore({
    reducer: {
        goals: goalReducer,
        auth: authReducer
    }
})

