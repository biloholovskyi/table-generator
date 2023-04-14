import { PersonFormData } from '../../../../entities/person'

export interface EditRowSchema extends PersonFormData {
  showModal?: boolean
  rowId?: string
  tableId?: string
}
