import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { AddNewPersonSchema } from '../types/addNewPersonSchema'

const initialState: AddNewPersonSchema = {
  name: '',
  surname: '',
  age: '',
  city: '',
}

export const addNewPersonSlice = createSlice({
  name: 'addNewPerson',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<{ name: keyof Omit<AddNewPersonSchema, 'id'>; value: string }>) => {
      state[action.payload.name] = action.payload.value
    },
  },
})

export const { actions: addNewPersonActions } = addNewPersonSlice
export const { reducer: addNewPersonReducer } = addNewPersonSlice
