export interface Person {
  name: string
  surname: string
  age: string
  city: string
  id: string
}

export interface PersonFormData extends Omit<Person, 'id'> {}
