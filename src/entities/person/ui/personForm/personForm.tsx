import { FormEvent, memo, useCallback } from 'react'
import './personFrom.style.scss'
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

interface PersonFormProps extends PersonFormData {
  onChange: (value: string, name: keyof PersonFormData) => void
  submit: () => void
  editType?: boolean
  className?: string
}

export const PersonForm = memo((props: PersonFormProps) => {
  const { name, surname, age, city, onChange, submit, editType, className } = props

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
    <form className={`personForm ${className}`} onSubmit={onSubmitForm}>
      <Input onChange={onChangeInput} name='name' value={name} className='personForm__input' placeholder='Name' />
      <Input
        onChange={onChangeInput}
        name='surname'
        value={surname}
        className='personForm__input'
        placeholder='Surname'
      />
      <Input
        onChange={onChangeInput}
        onlyNumber
        value={age}
        className='personForm__input'
        placeholder='Age'
        name='age'
      />
      <Selector
        selectedValue={city}
        options={cityOptions}
        onChange={onChangeCity}
        label='City'
        className='personForm__input'
      />
      <Button disabled={!isDisableButton()} className='personForm__button'>
        {editType ? 'AGREE' : 'ADD'}
      </Button>
    </form>
  )
})
