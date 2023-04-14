import './mainPage.style.scss'
import { AddNewPerson } from '../../features/addNewPerson'
import { TablePersons } from '../../features/tablePersons'
import { memo, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getCloneTable, personActions } from '../../entitie/person'
import { useAppDispatch } from '../../shared/hooks/useAppDispatch/useAppDispatch'

export const MainPage = memo(() => {
  const cloneTables = useSelector(getCloneTable)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(personActions.createOriginTable())
  }, [])

  const tables = useMemo(() => {
    return cloneTables?.map((table) => (
      <TablePersons origin={table.origin} id={table.id} personList={table.personList} key={table.id} />
    ))
  }, [cloneTables])

  return (
    <div className='mainPage'>
      <AddNewPerson />
      {tables}
    </div>
  )
})
