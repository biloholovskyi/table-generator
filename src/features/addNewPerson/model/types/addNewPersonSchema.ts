import { Person } from '../../../../entities/person'

export interface AddNewPersonSchema extends Omit<Person, 'id'> {}
