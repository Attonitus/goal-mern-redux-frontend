import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createGoalFuction, deleteGoalFuction, getGoalsFuction } from "./goalServices";

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create new goal

export const createGoal = createAsyncThunk('goals/create',
async(goalData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.token
        return await createGoalFuction(goalData, token)
    } catch (error) {
        const message = 'Hubo un error'
        return thunkAPI.rejectWithValue(message)
    }
})

//Get user goals

export const getGoals = createAsyncThunk('goals/getOwnGoals', 
async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.token
        return await getGoalsFuction(token)
    } catch (error) {
        const message = 'Hubo un error'
        return thunkAPI.rejectWithValue(message)
    }
})

//Delete goal

export const deleteGoal = createAsyncThunk('goals/deleteGoal', 
async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.token
        return await deleteGoalFuction(id, token)
    } catch (error) {
        const message = 'Hubo un error'
        return thunkAPI.rejectWithValue(message)
    }
})

export const goalSlice = createSlice({
    name: "goals",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = false
            state.message = ''
            state.goals = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.isLoading = false,
                state.isSuccess = true,
                state.goals.push(action.payload)
            })
            .addCase(createGoal.rejected, (state, action) => {
                state.isLoading = false,
                state.isError = true,
                state.message = action.payload
            })
            .addCase(getGoals.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGoals.fulfilled, (state, action) => {
                state.isLoading = false,
                state.isSuccess = true,
                state.goals = action.payload
            })
            .addCase(getGoals.rejected, (state, action) => {
                state.isLoading = false,
                state.isError = true,
                state.message = action.payload
            })
            .addCase(deleteGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteGoal.fulfilled, (state, action) => {
                state.isLoading = false,
                state.isSuccess = true,
                state.goals = state.goals.filter((goal) => goal._id !== action.payload.id)
            })
            .addCase(deleteGoal.rejected, (state, action) => {
                state.isLoading = false,
                state.isError = true,
                state.message = action.payload
            })
    }
})

export const {reset} = goalSlice.actions

export default goalSlice.reducer