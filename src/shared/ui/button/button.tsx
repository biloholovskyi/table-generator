import { ButtonHTMLAttributes, ReactNode } from 'react'
import './button.style.scss'

type ButtonTheme = 'default' | 'small' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  disabled?: boolean
  children?: ReactNode
  theme?: ButtonTheme
}

export const Button = (props: ButtonProps) => {
  const { children, className, disabled, onClick, theme = 'default' } = props

  return (
    <button className={`button ${className} button--${theme}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
