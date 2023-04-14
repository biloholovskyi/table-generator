import { AddNewPersonSchema } from '../../../../features/addNewPerson'
import { PersonSchema } from '../../../../entitie/person'

export interface StateSchema {
  addNewPerson: AddNewPersonSchema
  person: PersonSchema
}
