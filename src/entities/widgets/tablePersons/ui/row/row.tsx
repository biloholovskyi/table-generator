import { memo, useCallback } from 'react'
import { RowButtons } from '../rowButtons/rowButtons'
import { Person, personActions } from '../../../../person'
import { editRowActions } from '../../../../../features/editRow'
import { useAppDispatch } from '../../../../../shared/hooks/useAppDispatch/useAppDispatch'

interface RowProps {
  data: Person
  tableId: string
}

export const Row = memo((props: RowProps) => {
  const {
    data: { name, surname, age, city, id },
    tableId,
  } = props

  const dispatch = useAppDispatch()

  const openEditModal = useCallback(() => {
    dispatch(editRowActions.openModal({ data: props.data, tableId }))
  }, [dispatch])

  const onDelete = useCallback(() => {
    dispatch(personActions.deleteRow({ rowId: id, tableId }))
  }, [dispatch, id, tableId])

  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>{city}</td>
      <td>
        <RowButtons openEdit={openEditModal} onDelete={onDelete} />
      </td>
    </tr>
  )
})
