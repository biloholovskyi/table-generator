import { memo, useCallback } from 'react'
import './addNewWrapper.styles.scss'
import { PersonForm } from '../personForm/personForm'
import { useSelector } from 'react-redux'
import {
  getAge,
  getCity,
  getName,
  getSurname,
} from '../../../../features/addNewPerson/model/selectors/addNewPersonSelectors/addNewPersonSelectors'
import { PersonFormData } from '../../model/types/person'
import { addNewPersonActions } from '../../../../features/addNewPerson/model/slice/addNewPersonSlice'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch/useAppDispatch'
import { personActions } from '../../model/slice/personSlice'

export const AddNewWrapper = memo(() => {
  const name = useSelector(getName)
  const surname = useSelector(getSurname)
  const age = useSelector(getAge)
  const city = useSelector(getCity)

  const dispatch = useAppDispatch()

  const onChangeForm = useCallback(
    (value: string, name: keyof PersonFormData) => {
      dispatch(addNewPersonActions.setInputValue({ name, value }))
    },
    [dispatch]
  )

  const addNewRow = useCallback(() => {
    const newPerson = { name, surname, age, city }
    dispatch(personActions.addPerson(newPerson))
    dispatch(addNewPersonActions.clearForm())
  }, [dispatch, name, surname, age, city])

  return (
    <div className='addNewWrapper'>
      <PersonForm submit={addNewRow} onChange={onChangeForm} name={name} surname={surname} age={age} city={city} />
      <PersonForm submit={addNewRow} onChange={onChangeForm} name={name} surname={surname} age={age} city={city} />
    </div>
  )
})
