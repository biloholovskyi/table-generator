import { memo } from 'react'
import { Button } from '../../../../shared/ui/button/button'
import './rowButtons.style.scss'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch/useAppDispatch'
import { personActions } from '../../../../entitie/person'

interface RowButtonsProps {
  rowId: string
  tableId: string
}

export const RowButtons = memo((props: RowButtonsProps) => {
  const { rowId, tableId } = props

  const dispatch = useAppDispatch()

  const onDelete = () => {
    dispatch(personActions.deleteRow({ rowId, tableId }))
  }

  return (
    <div className='rowButtons'>
      <Button theme='link'>Edit</Button>
      <Button className='rowButtons__delete' theme='link' onClick={onDelete}>
        Delete
      </Button>
    </div>
  )
})
