import { FC } from 'react'

interface IButtonProps {
  className: string
  content: string
  isDisabled?: boolean
  handleClick?: () => void
  type?: 'submit'
  dataElem?: string
}

const Button: FC<IButtonProps> = ({
  isDisabled,
  className,
  content,
  dataElem,
  type,
  handleClick,
}) => {
  return (
    <button
      className={className}
      disabled={isDisabled}
      onClick={handleClick}
      type={type}
      data-elem={dataElem}
    >
      {content}
    </button>
  )
}

export default Button
