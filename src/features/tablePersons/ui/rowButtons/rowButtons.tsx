import { memo } from 'react'
import { Button } from '../../../../shared/ui/button/button'
import './rowButtons.style.scss'

interface RowButtonsProps {
  id: string
}

export const RowButtons = memo((props: RowButtonsProps) => {
  const { id } = props

  return (
    <div className='rowButtons'>
      <Button theme='link'>Edit</Button>
      <Button className='rowButtons__delete' theme='link'>
        Delete
      </Button>
    </div>
  )
})
