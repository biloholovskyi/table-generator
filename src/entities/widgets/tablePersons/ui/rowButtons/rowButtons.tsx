import { memo } from 'react'
import { Button } from '../../../../../shared/ui/button/button'
import './rowButtons.style.scss'

interface RowButtonsProps {
  openEdit: () => void
  onDelete: () => void
}

export const RowButtons = memo((props: RowButtonsProps) => {
  const { openEdit, onDelete } = props

  return (
    <div className='rowButtons'>
      <Button theme='link' onClick={openEdit}>
        Edit
      </Button>
      <Button className='rowButtons__delete' theme='link' onClick={onDelete}>
        Delete
      </Button>
    </div>
  )
})
