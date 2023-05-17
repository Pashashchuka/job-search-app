import { Dispatch, FC, SetStateAction } from 'react'

import close from 'assets/icons/close.svg'
import arrow from 'assets/icons/down.svg'

import InputSelect from 'components/InputSelect'
import Button from 'components/Button'

import { useVacanciesForm } from './hooks'

import styles from './VacanciesForm.module.scss'

interface IVacanciesFormProps {
  salaryFrom: string
  salaryTo: string
  handleClickArrowDownBtn: (
    salary: string,
    setSalary: Dispatch<SetStateAction<string>>,
  ) => void
  handleClickArrowUpBtn: (
    salary: string,
    setSalary: Dispatch<SetStateAction<string>>,
  ) => void
  onChangeSalaryValue: (
    event: {
      target: {
        value: SetStateAction<string>
      }
    },
    setSalary: Dispatch<SetStateAction<string>>,
  ) => void
  setSalaryFrom: Dispatch<SetStateAction<string>>
  setSalaryTo: Dispatch<SetStateAction<string>>
}

const VacanciesForm: FC<IVacanciesFormProps> = ({
  salaryFrom,
  salaryTo,
  handleClickArrowDownBtn,
  handleClickArrowUpBtn,
  onChangeSalaryValue,
  setSalaryFrom,
  setSalaryTo,
}) => {
  const { onSubmit, handleSubmit } = useVacanciesForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.filterBlock}>
      <div className={styles.titleBlock}>
        <h3 className={styles.title}>Фильтры</h3>
        <button className={styles.resetBtn}>
          <p className={styles.resetText}>Сбросить все</p>
          <img className={styles.closeImg} src={close} alt="close" />
        </button>
      </div>
      <div className={styles.industryBlock}>
        <h4 className={styles.subtitle}>Отрасль</h4>
        <InputSelect />
      </div>
      <div className={styles.salaryBlock}>
        <h4 className={styles.subtitle}>Оклад</h4>
        <div className={styles.salaryWrapper}>
          <input
            className={styles.salary}
            onChange={(event) => onChangeSalaryValue(event, setSalaryFrom)}
            value={salaryFrom}
            type="number"
            placeholder="От"
          />
          <div className={styles.arrowBlock}>
            <img
              className={styles.arrowUp}
              onClick={() => handleClickArrowUpBtn(salaryFrom, setSalaryFrom)}
              src={arrow}
              alt="arrowUp"
            />
            <img
              className={styles.arrowDown}
              onClick={() => handleClickArrowDownBtn(salaryFrom, setSalaryFrom)}
              src={arrow}
              alt="arrowDown"
            />
          </div>
        </div>
        <div className={styles.salaryWrapper}>
          <input
            className={styles.salary}
            onChange={(event) => onChangeSalaryValue(event, setSalaryTo)}
            value={salaryTo}
            type="number"
            placeholder="До"
          />
          <div className={styles.arrowBlock}>
            <img
              className={styles.arrowUp}
              onClick={() => handleClickArrowUpBtn(salaryTo, setSalaryTo)}
              src={arrow}
              alt="arrowUp"
            />
            <img
              className={styles.arrowDown}
              onClick={() => handleClickArrowDownBtn(salaryTo, setSalaryTo)}
              src={arrow}
              alt="arrowDown"
            />
          </div>
        </div>
      </div>
      <Button className={styles.filterButton} content="Применить" />
    </form>
  )
}
export default VacanciesForm
