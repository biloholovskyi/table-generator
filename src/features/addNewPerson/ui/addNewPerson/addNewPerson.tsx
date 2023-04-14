import { FormEvent, memo, useCallback } from 'react'
import './addNewPerson.style.scss'
import { Input } from '../../../../shared/ui/input/input'
import { useSelector } from 'react-redux'
import { getAge, getCity, getName, getSurname } from '../../model/selectors/addNewPersonSelectors/addNewPersonSelectors'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch/useAppDispatch'
import { addNewPersonActions } from '../../model/slice/addNewPersonSlice'
import { AddNewPersonSchema } from '../../model/types/addNewPersonSchema'
import { personActions } from '../../../../entitie/person'
import { Button } from '../../../../shared/ui/button/button'
import { Option, Selector } from '../../../../shared/ui/selector/selector'

const cityOptions: Option[] = [
  { label: 'Riga', value: 'Riga' },
  { label: 'Daugavpils', value: 'Daugavpils' },
  { label: 'Jūrmala', value: 'Jūrmala' },
  { label: 'Ventspils', value: 'Ventspils' },
]

export const AddNewPerson = memo(() => {
  const name = useSelector(getName)
  const surname = useSelector(getSurname)
  const age = useSelector(getAge)
  const city = useSelector(getCity)

  const dispatch = useAppDispatch()

  const onChangeInput = useCallback(
    (value: string, name: string) => {
      const nameString = name as keyof Omit<AddNewPersonSchema, 'id'>
      dispatch(addNewPersonActions.setInputValue({ name: nameString, value }))
    },
    [dispatch]
  )

  const isDisableButton = () => {
    return !!name && !!surname && !!age && !!city
  }

  const addNew = (e: FormEvent) => {
    e.preventDefault()
    const newPerson = { name, surname, age, city }
    dispatch(personActions.addPerson(newPerson))
    dispatch(addNewPersonActions.setInputValue({ name: 'name', value: '' }))
    dispatch(addNewPersonActions.setInputValue({ name: 'surname', value: '' }))
    dispatch(addNewPersonActions.setInputValue({ name: 'age', value: '' }))
    dispatch(addNewPersonActions.setInputValue({ name: 'city', value: '' }))
  }

  return (
    <form className='addNewPersonForm' onSubmit={addNew}>
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
        onChange={(value: string) => {
          dispatch(addNewPersonActions.setInputValue({ name: 'city', value }))
        }}
        label='City'
        className='addNewPersonForm__input'
      />
      <Button disabled={!isDisableButton()} className='addNewPersonForm__button'>
        ADD
      </Button>
    </form>
  )
})
