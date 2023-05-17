import { Dispatch, FC, SetStateAction } from 'react'
import { Controller } from 'react-hook-form'

import close from 'assets/icons/close.svg'
import arrow from 'assets/icons/down.svg'

import InputSelect from 'components/InputSelect'
import Button from 'components/Button'

import { useVacanciesForm } from './hooks'

import styles from './VacanciesForm.module.scss'

interface IVacanciesFormProps {
  handleClickArrowDownBtn: (
    salary: string,
    setSalary: Dispatch<SetStateAction<string>>,
  ) => void
  handleClickArrowUpBtn: (
    salary: string,
    setSalary: Dispatch<SetStateAction<string>>,
  ) => void
}

const VacanciesForm: FC<IVacanciesFormProps> = ({
  handleClickArrowDownBtn,
  handleClickArrowUpBtn,
}) => {
  const { control, onSubmit, handleSubmit } = useVacanciesForm()

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
        <InputSelect control={control} />
      </div>
      <div className={styles.salaryBlock}>
        <h4 className={styles.subtitle}>Оклад</h4>
        <div className={styles.salaryWrapper}>
          <Controller
            name="payment_from"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <input
                  className={styles.salary}
                  onChange={onChange}
                  value={value}
                  type="number"
                  placeholder="От"
                />
                <div className={styles.arrowBlock}>
                  <img
                    className={styles.arrowUp}
                    onClick={() => handleClickArrowUpBtn(value, onChange)}
                    src={arrow}
                    alt="arrowUp"
                  />
                  <img
                    className={styles.arrowDown}
                    onClick={() => handleClickArrowDownBtn(value, onChange)}
                    src={arrow}
                    alt="arrowDown"
                  />
                </div>
              </>
            )}
          />
        </div>
        <div className={styles.salaryWrapper}>
          <Controller
            name="payment_to"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <input
                  className={styles.salary}
                  onChange={onChange}
                  value={value}
                  type="number"
                  placeholder="До"
                />
                <div className={styles.arrowBlock}>
                  <img
                    className={styles.arrowUp}
                    onClick={() => handleClickArrowUpBtn(value, onChange)}
                    src={arrow}
                    alt="arrowUp"
                  />
                  <img
                    className={styles.arrowDown}
                    onClick={() => handleClickArrowDownBtn(value, onChange)}
                    src={arrow}
                    alt="arrowDown"
                  />
                </div>
              </>
            )}
          />
        </div>
      </div>
      <Button
        className={styles.filterButton}
        content="Применить"
        type="submit"
      />
    </form>
  )
}
export default VacanciesForm
