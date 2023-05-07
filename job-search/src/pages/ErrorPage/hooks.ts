import { useNavigate } from 'react-router-dom'

export const useErrorPage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return {
    handleClick,
  }
}
