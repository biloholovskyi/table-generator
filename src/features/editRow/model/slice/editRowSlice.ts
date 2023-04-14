import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditRowSchema } from '../type/editRowSchema'
import { Person, PersonFormData } from '../../../../entities/person'

const initialState: EditRowSchema = {
  name: '',
  surname: '',
  age: '',
  city: '',
}

export const EditRowSlice = createSlice({
  name: 'editRow',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<PersonFormData>) => {
      const { name, surname, age, city } = action.payload
      state.name = name
      state.surname = surname
      state.age = age
      state.city = city
    },
    closeModal: (state) => {
      state.showModal = false
    },
    openModal: (state, action: PayloadAction<{ data: Person; tableId: string }>) => {
      const {
        data: { name, age, surname, city, id },
        tableId,
      } = action.payload

      state.showModal = true
      state.name = name
      state.surname = surname
      state.age = age
      state.city = city
      state.rowId = id
      state.tableId = tableId
    },
    setInputValue: (state, action: PayloadAction<{ name: keyof PersonFormData; value: string }>) => {
      state[action.payload.name] = action.payload.value
    },
  },
})

export const { actions: editRowActions } = EditRowSlice
export const { reducer: editRowReducer } = EditRowSlice
