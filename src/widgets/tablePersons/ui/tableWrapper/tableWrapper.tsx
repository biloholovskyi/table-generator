import { memo, useEffect, useMemo } from 'react'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch/useAppDispatch'
import { getCloneTable, personActions } from '../../../../entities/person'
import { TablePersons } from '../tablePersons/tablePersons'
import { useSelector } from 'react-redux'

export const TableWrapper = memo(() => {
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

  return <>{tables}</>
})
