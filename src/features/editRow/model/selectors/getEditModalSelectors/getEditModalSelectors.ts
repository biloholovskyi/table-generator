import { StateSchema } from '../../../../../app/providers/storeProvider'

export const getEditModalStatus = (state: StateSchema) => state?.editRow?.showModal

export const getEditName = (state: StateSchema) => state?.editRow?.name ?? ''
export const getEditSurname = (state: StateSchema) => state?.editRow?.surname ?? ''
export const getEditAge = (state: StateSchema) => state?.editRow?.age ?? ''
export const getEditCity = (state: StateSchema) => state?.editRow?.city ?? ''

export const getEditRowId = (state: StateSchema) => state?.editRow?.rowId ?? ''
export const getEditTableId = (state: StateSchema) => state?.editRow?.tableId ?? ''
