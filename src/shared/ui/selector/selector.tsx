import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { Input } from '../input/input'
import './selector.style.scss'

export interface Option {
  label: string
  value: string
}

interface SelectorProps {
  options: Option[]
  selectedValue?: string
  onChange: (selectedValue: string) => void
  className?: string
  label?: string
}

export const Selector = memo((props: SelectorProps) => {
  const { className, onChange, selectedValue, options, label } = props

  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOptionsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectRef])

  const toggleOptions = () => {
    setIsOptionsOpen((prev) => !prev)
  }

  const handleOptionClick = (optionValue: string) => {
    setIsOptionsOpen(false)
    onChange?.(optionValue)
  }

  const optionsList = useMemo(() => {
    return options.map((option) => (
      <div key={option.value} className='selector__option' onClick={() => handleOptionClick(option.value)}>
        {option.label}
      </div>
    ))
  }, [options])

  return (
    <div ref={selectRef} className={`selector ${className}`}>
      <Input readonly placeholder={label} value={selectedValue} onClick={toggleOptions} />
      {isOptionsOpen && <div className='selector__options'>{optionsList}</div>}
    </div>
  )
})
