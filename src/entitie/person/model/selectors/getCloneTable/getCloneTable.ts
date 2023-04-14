import { StateSchema } from '../../../../../app/providers/storeProvider'

export const getCloneTable = (state: StateSchema) => state?.person?.cloneTable || []
