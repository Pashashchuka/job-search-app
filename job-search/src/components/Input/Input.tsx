import { Dispatch, FC, SetStateAction } from 'react'
import { Control, Controller } from 'react-hook-form'

import arrow from 'assets/icons/down.svg'

import styles from './Input.module.scss'

interface IInputProps {
  control: Control<any>
  placeholder: string
  dataElem: string
  name: any
  handleArrowUpClick: (
    salary: string,
    setSalary: Dispatch<SetStateAction<string>>,
  ) => void
  handleArrowDownClick: (
    salary: string,
    setSalary: Dispatch<SetStateAction<string>>,
  ) => void
}

const Input: FC<IInputProps> = ({
  placeholder,
  control,
  name,
  dataElem,
  handleArrowDownClick,
  handleArrowUpClick,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <input
            className={styles.salary}
            onChange={onChange}
            value={value}
            type="number"
            placeholder={placeholder}
            data-elem={dataElem}
          />
          <div className={styles.arrowBlock}>
            <img
              className={styles.arrowUp}
              onClick={() => handleArrowUpClick(value, onChange)}
              src={arrow}
              alt="arrowUp"
            />
            <img
              className={styles.arrowDown}
              onClick={() => handleArrowDownClick(value, onChange)}
              src={arrow}
              alt="arrowDown"
            />
          </div>
        </>
      )}
    />
  )
}

export default Input
