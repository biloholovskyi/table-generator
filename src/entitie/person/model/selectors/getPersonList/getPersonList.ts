import { StateSchema } from '../../../../../app/providers/storeProvider'

export const getPersonList = (state: StateSchema) => state?.person?.personList || []
