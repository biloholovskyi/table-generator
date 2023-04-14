import { Person } from './person'

export interface PersonSchema {
  personList: Person[]
  cloneTable: Table[]
}

export interface Table extends Omit<PersonSchema, 'cloneTable'> {
  id: string
}
