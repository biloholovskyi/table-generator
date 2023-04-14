import './mainPage.style.scss'
import { AddNewPersonSchema } from '../../features/addNewPerson'
import { TablePersons } from '../../entities/widgets/tablePersons'
import { memo, useCallback, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { AddNewForm, getCloneTable, personActions, PersonFormData } from '../../entities/person'
import { useAppDispatch } from '../../shared/hooks/useAppDispatch/useAppDispatch'
import {
  getAge,
  getCity,
  getName,
  getSurname,
} from '../../features/addNewPerson/model/selectors/addNewPersonSelectors/addNewPersonSelectors'
import { addNewPersonActions } from '../../features/addNewPerson/model/slice/addNewPersonSlice'

export const MainPage = memo(() => {
  const cloneTables = useSelector(getCloneTable)
  const name = useSelector(getName)
  const surname = useSelector(getSurname)
  const age = useSelector(getAge)
  const city = useSelector(getCity)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(personActions.createOriginTable())
  }, [])

  const tables = useMemo(() => {
    return cloneTables?.map((table) => (
      <TablePersons origin={table.origin} id={table.id} personList={table.personList} key={table.id} />
    ))
  }, [cloneTables])

  const onChangeForm = useCallback(
    (value: string, name: keyof PersonFormData) => {
      dispatch(addNewPersonActions.setInputValue({ name, value }))
    },
    [dispatch]
  )

  const addNewRow = useCallback(() => {
    const newPerson = { name, surname, age, city }
    dispatch(personActions.addPerson(newPerson))
    dispatch(addNewPersonActions.setInputValue({ name: 'name', value: '' }))
    dispatch(addNewPersonActions.setInputValue({ name: 'surname', value: '' }))
    dispatch(addNewPersonActions.setInputValue({ name: 'age', value: '' }))
    dispatch(addNewPersonActions.setInputValue({ name: 'city', value: '' }))
  }, [dispatch, name, surname, age, city])

  return (
    <div className='mainPage'>
      <AddNewForm submit={addNewRow} onChange={onChangeForm} name={name} surname={surname} age={age} city={city} />
      {tables}
    </div>
  )
})
