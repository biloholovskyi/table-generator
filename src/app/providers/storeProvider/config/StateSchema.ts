import { AddNewPersonSchema } from '../../../../features/addNewPerson'
import { PersonSchema } from '../../../../entities/person'
import { EditRowSchema } from '../../../../features/editRow'

export interface StateSchema {
  addNewPerson: AddNewPersonSchema
  editRow: EditRowSchema
  person: PersonSchema
}
