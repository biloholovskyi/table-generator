import { memo, useMemo } from 'react'
import './tablePerson.styles.scss'
import { Person, personActions } from '../../../../entitie/person'
import { Button } from '../../../../shared/ui/button/button'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch/useAppDispatch'

import { ReactComponent as CloseIcon } from '../../../../shared/assets/icon/close.svg'
import { SvgIcon } from '../../../../shared/ui/svgIcon/svgIcon'
import { RowButtons } from '../rowButtons/rowButtons'

interface TablePersonsProps {
  personList: Person[]
  className?: string
  id?: string
}

export const TablePersons = memo((props: TablePersonsProps) => {
  const { personList, className, id } = props

  const dispatch = useAppDispatch()

  const body = useMemo(() => {
    return personList?.map((person) => (
      <tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.surname}</td>
        <td>{person.age}</td>
        <td>{person.city}</td>
        <td>
          <RowButtons id={person.id} />
        </td>
      </tr>
    ))
  }, [personList])

  const emptyBody = useMemo(() => {
    const emptyRows = new Array(Math.max(8 - personList.length, 0)).fill({})

    return emptyRows?.map((person, _idx) => (
      <tr key={`empty-${_idx}`} className={'empty-row'}>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    ))
  }, [personList])

  const cloneTable = () => {
    dispatch(personActions.createClone(personList))
  }

  const deleteTable = (id: string) => {
    dispatch(personActions.deleteTable(id))
  }

  return (
    <div className={`tablePerson ${className}`}>
      <div className='tablePerson__buttons'>
        <Button theme='small' className='cloneBtn' onClick={cloneTable}>
          Clone
        </Button>

        {id && (
          <Button theme='icon' className='cloneBtn' onClick={() => deleteTable(id)}>
            <SvgIcon Svg={CloseIcon} />
          </Button>
        )}
      </div>
      <table className='tablePerson__table'>
        <thead className='table__head'>
          <tr>
            <th>
              <span>Name</span>
            </th>
            <th>
              <span>Surname</span>
            </th>
            <th>
              <span>Age</span>
            </th>
            <th>
              <span>City</span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className='table__body'>
          {body}
          {emptyBody}
        </tbody>
      </table>
    </div>
  )
})
