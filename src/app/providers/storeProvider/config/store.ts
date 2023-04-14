import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { addNewPersonReducer } from '../../../../features/addNewPerson'
import { personReducer } from '../../../../entities/person'
import { editRowReducer } from '../../../../features/editRow'

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    addNewPerson: addNewPersonReducer,
    person: personReducer,
    editRow: editRowReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: true,
    preloadedState: initialState,
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
