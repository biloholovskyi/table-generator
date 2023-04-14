import React, { memo } from 'react'

interface IconProps {
  className?: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export const SvgIcon = memo((props: IconProps) => {
  const { className, Svg } = props

  return <Svg className={className} />
})
