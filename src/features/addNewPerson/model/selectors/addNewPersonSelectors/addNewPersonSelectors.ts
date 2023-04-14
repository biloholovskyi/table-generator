import { StateSchema } from '../../../../../app/providers/storeProvider'

export const getName = (state: StateSchema) => state?.addNewPerson?.name ?? ''
export const getSurname = (state: StateSchema) => state?.addNewPerson?.surname ?? ''
export const getAge = (state: StateSchema) => state?.addNewPerson?.age ?? ''
export const getCity = (state: StateSchema) => state?.addNewPerson?.city ?? ''
