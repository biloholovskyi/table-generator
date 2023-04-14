import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { PersonSchema } from '../types/personSchema'
import { Person } from '../types/person'
import { generateId } from '../../../../shared/lib/generateId/generateId'

const initialState: PersonSchema = {
  tables: [],
}

export const PersonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Omit<Person, 'id'>>) => {
      state.tables.find((table) => table.origin)?.personList.push({ ...action.payload, id: generateId() })
    },
    createOriginTable: (state) => {
      state.tables = [{ personList: [], id: generateId(), origin: true }]
    },
    createClone: (state, action: PayloadAction<Person[]>) => {
      state.tables.push({ personList: action.payload, id: generateId() })
    },
    deleteTable: (state, action: PayloadAction<string>) => {
      state.tables = state.tables.filter((table) => table.id !== action.payload)
    },
    deleteRow: (state, action: PayloadAction<{ rowId: string; tableId: string }>) => {
      const { tableId, rowId } = action.payload
      const tableIndex = state.tables.findIndex((table) => table.id === tableId)
      if (tableIndex !== -1) {
        state.tables[tableIndex].personList = state.tables[tableIndex].personList.filter(
          (person) => person.id !== rowId
        )
      }
    },
  },
})

export const { actions: personActions } = PersonSlice
export const { reducer: personReducer } = PersonSlice
