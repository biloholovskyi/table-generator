import './mainPage.style.scss'
import { AddNewPerson } from '../../features/addNewPerson'
import { TablePersons } from '../../features/tablePersons'
import { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getCloneTable, getPersonList } from '../../entitie/person'

export const MainPage = memo(() => {
  const personList = useSelector(getPersonList)
  const cloneTables = useSelector(getCloneTable)

  const tables = useMemo(() => {
    return cloneTables?.map((table) => <TablePersons id={table.id} personList={table.personList} key={table.id} />)
  }, [cloneTables])

  return (
    <div className='mainPage'>
      <AddNewPerson />
      <TablePersons personList={personList} />
      {tables}
    </div>
  )
})
