import { MutableRefObject, ReactNode, useCallback, MouseEvent, useRef, useState, useEffect } from 'react'
import './modal.style.scss'

interface ModalProps {
  className?: string
  children: ReactNode
  onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const { className, children, onClose } = props

  const [isClosing, setIsClosing] = useState(false)

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 300)
    }
  }, [onClose])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  const onBodyClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const isClosingClass = isClosing ? 'modal__body--closing' : ''

  return (
    <div className={`modal ${className}`} onClick={closeHandler}>
      <div className={`modal__body ${isClosingClass}`} onClick={onBodyClick}>
        {children}
      </div>
    </div>
  )
}
