import { FormEvent, memo, useCallback } from 'react'
import './addNewForm.style.scss'
import { Input } from '../../../../shared/ui/input/input'
import { Button } from '../../../../shared/ui/button/button'
import { Option, Selector } from '../../../../shared/ui/selector/selector'
import { PersonFormData } from '../../model/types/person'

const cityOptions: Option[] = [
  { label: 'Riga', value: 'Riga' },
  { label: 'Daugavpils', value: 'Daugavpils' },
  { label: 'Jūrmala', value: 'Jūrmala' },
  { label: 'Ventspils', value: 'Ventspils' },
]

interface AddNewPersonProps {
  name: string
  surname: string
  age: string
  city: string
  onChange: (value: string, name: keyof PersonFormData) => void
  submit: () => void
  editType?: boolean
}

export const AddNewForm = memo((props: AddNewPersonProps) => {
  const { name, surname, age, city, onChange, submit, editType } = props

  const onChangeInput = useCallback(
    (value: string, name: string) => {
      const nameInput = name as keyof PersonFormData
      onChange(value, nameInput)
    },
    [onChange]
  )

  const onChangeCity = useCallback(
    (value: string) => {
      onChange(value, 'city')
    },
    [onChange]
  )

  const isDisableButton = () => {
    return !!name && !!surname && !!age && !!city
  }

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault()
    submit()
  }

  return (
    <form className='addNewPersonForm' onSubmit={onSubmitForm}>
      <Input onChange={onChangeInput} name='name' value={name} className='addNewPersonForm__input' placeholder='Name' />
      <Input
        onChange={onChangeInput}
        name='surname'
        value={surname}
        className='addNewPersonForm__input'
        placeholder='Surname'
      />
      <Input
        onChange={onChangeInput}
        onlyNumber
        value={age}
        className='addNewPersonForm__input'
        placeholder='Age'
        name='age'
      />
      <Selector
        selectedValue={city}
        options={cityOptions}
        onChange={onChangeCity}
        label='City'
        className='addNewPersonForm__input'
      />
      <Button disabled={!isDisableButton()} className='addNewPersonForm__button'>
        {editType ? 'AGREE' : 'ADD'}
      </Button>
    </form>
  )
})
