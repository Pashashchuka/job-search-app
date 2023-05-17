import { FC } from 'react'

interface IButtonProps {
  className: string
  content: string
  isDisabled?: boolean
  handleClick?: () => void
  type?: 'submit'
}

const Button: FC<IButtonProps> = ({
  isDisabled,
  className,
  content,
  type,
  handleClick,
}) => {
  return (
    <button
      className={className}
      disabled={isDisabled}
      onClick={handleClick}
      type={type}
    >
      {content}
    </button>
  )
}

export default Button
