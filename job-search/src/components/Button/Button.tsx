import { FC } from 'react'

interface IButtonProps {
  className: string
  content: string
  isDisabled?: boolean
  handleClick?: () => void
}

const Button: FC<IButtonProps> = ({
  className,
  content,
  isDisabled,
  handleClick,
}) => {
  return (
    <button className={className} disabled={isDisabled} onClick={handleClick}>
      {content}
    </button>
  )
}

export default Button
