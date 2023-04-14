import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { PersonSchema } from '../types/personSchema'
import { Person } from '../types/person'
import { generateId } from '../../../../shared/lib/generateId/generateId'

const initialState: PersonSchema = {
  personList: [],
  cloneTable: [],
}

export const PersonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Omit<Person, 'id'>>) => {
      state.personList.push({ ...action.payload, id: generateId() })
    },
    createClone: (state, action: PayloadAction<Person[]>) => {
      state.cloneTable.push({ personList: action.payload, id: generateId() })
    },
    deleteTable: (state, action: PayloadAction<string>) => {
      state.cloneTable = state.cloneTable.filter((table) => table.id !== action.payload)
    },
  },
})

export const { actions: personActions } = PersonSlice
export const { reducer: personReducer } = PersonSlice
