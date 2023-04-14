import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { AddNewPersonSchema } from '../types/addNewPersonSchema'
import { PersonFormData } from '../../../../entities/person'

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
    setInputValue: (state, action: PayloadAction<{ name: keyof PersonFormData; value: string }>) => {
      state[action.payload.name] = action.payload.value
    },
    clearForm: (state) => {
      state.name = ''
      state.surname = ''
      state.age = ''
      state.city = ''
    },
  },
})

export const { actions: addNewPersonActions } = addNewPersonSlice
export const { reducer: addNewPersonReducer } = addNewPersonSlice
