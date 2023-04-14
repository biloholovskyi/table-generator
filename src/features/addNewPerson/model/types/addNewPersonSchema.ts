import { Person } from '../../../../entitie/person'

export interface AddNewPersonSchema extends Omit<Person, 'id'> {}
