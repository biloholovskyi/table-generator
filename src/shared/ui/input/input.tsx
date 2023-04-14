import { ChangeEvent, InputHTMLAttributes, memo, useCallback, useState } from 'react'
import './input.style.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  onChange?: (value: string, name: string) => void
  onlyNumber?: boolean
  name?: string
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const { className, placeholder, value, onChange, onlyNumber, name, readonly, ...otherOptions } = props

  const [isFocus, setIsFocus] = useState(false)

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (onlyNumber) {
        const regex = /^\d+$/

        if (!regex.test(e.target.value) && e.target.value.trim() !== '') {
          return
        }
      }
      onChange?.(e.target.value, name || '')
    },
    [value]
  )

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  const placeholderString = isFocus ? '' : placeholder

  return (
    <input
      readOnly={readonly}
      type='text'
      className={`input ${className}`}
      placeholder={placeholderString}
      value={value}
      onChange={onChangeHandler}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...otherOptions}
    />
  )
})
