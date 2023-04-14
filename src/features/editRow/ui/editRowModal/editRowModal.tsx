import { memo, useCallback } from 'react'
import { PersonForm, personActions, PersonFormData } from '../../../../entities/person'
import { Modal } from '../../../../shared/ui/modal/modal'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch/useAppDispatch'
import { editRowActions } from '../../model/slice/editRowSlice'
import { useSelector } from 'react-redux'
import {
  getEditAge,
  getEditCity,
  getEditName,
  getEditRowId,
  getEditSurname,
  getEditTableId,
} from '../../model/selectors/getEditModalSelectors/getEditModalSelectors'

export const EditRowModal = memo(() => {
  const name = useSelector(getEditName)
  const surname = useSelector(getEditSurname)
  const age = useSelector(getEditAge)
  const city = useSelector(getEditCity)
  const id = useSelector(getEditRowId)
  const tableId = useSelector(getEditTableId)

  const dispatch = useAppDispatch()

  const onClose = useCallback(() => {
    dispatch(editRowActions.closeModal())
  }, [dispatch])

  const onChangeForm = useCallback(
    (value: string, name: keyof PersonFormData) => {
      dispatch(editRowActions.setInputValue({ name, value }))
    },
    [dispatch]
  )

  const saveChange = useCallback(() => {
    dispatch(personActions.editRow({ tableId, data: { name, surname, age, city, id } }))
    dispatch(editRowActions.clearForm())
    dispatch(editRowActions.closeModal())
  }, [dispatch, name, surname, age, city, id, tableId])

  return (
    <Modal onClose={onClose}>
      <PersonForm
        editType
        submit={saveChange}
        onChange={onChangeForm}
        name={name}
        surname={surname}
        age={age}
        city={city}
      />
    </Modal>
  )
})
