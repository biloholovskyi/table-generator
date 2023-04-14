import { memo, useMemo } from 'react'
import './tablePerson.styles.scss'
import { personActions } from '../../../../entities/person'
import { Button } from '../../../../shared/ui/button/button'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch/useAppDispatch'
import { ReactComponent as CloseIcon } from '../../../../shared/assets/icon/close.svg'
import { SvgIcon } from '../../../../shared/ui/svgIcon/svgIcon'
import { Table } from '../../../../entities/person/model/types/table'
import { Row } from '../row/row'
import { useSelector } from 'react-redux'
import { EditRowModal, getEditModalStatus } from '../../../../features/editRow'

interface TablePersonsProps extends Table {
  className?: string
}

export const TablePersons = memo((props: TablePersonsProps) => {
  const { personList, className, id, origin } = props
  const isShowEditModal = useSelector(getEditModalStatus)

  const dispatch = useAppDispatch()

  const body = useMemo(() => {
    return personList?.map((person) => <Row tableId={id} key={person.id} data={person} />)
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
      {isShowEditModal && <EditRowModal />}

      <div className='tablePerson__buttons'>
        <Button theme='small' className='cloneBtn' onClick={cloneTable}>
          Clone
        </Button>

        {!origin && (
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
