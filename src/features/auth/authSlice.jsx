import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { logout, register } from './authServices'

//Get user from localStorage

const user = JSON.parse(localStorage.getItem("user"))
const token = JSON.parse(localStorage.getItem("token"))

const initialState = {
    user: user ? user : null,
    token: token ? token : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Register user
export const registerThunk = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
        const res = await register(user)
        return res
    } catch (error) {
        const mesage = 'hubo un error'
        return thunkAPI.rejectWithValue(mesage)
    }
})

export const logoutThunk = createAsyncThunk('auth/logout', 
async() => {
    await logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = false,
            state.message = '',
            state.user = null,
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.isLoading = false,
                state.isSuccess= true,
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.isLoading = false,
                state.isError = true,
                state.message = action.payload,
                state.user = null
            })
            .addCase(logoutThunk.fulfilled, (state, action) => {
                state.user = null
            })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer