import { memo } from 'react'
import './app.style.scss'
import { AddNewWrapper } from '../entities/person'
import { TableWrapper } from '../widgets/tablePersons/ui/tableWrapper/tableWrapper'

export const App = memo(() => {
  return (
    <div className='app'>
      <AddNewWrapper />
      <TableWrapper />
    </div>
  )
})
