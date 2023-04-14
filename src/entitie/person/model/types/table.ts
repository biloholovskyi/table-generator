import { Person } from './person'

export interface Table {
  personList: Person[]
  id: string
  origin?: boolean
}
