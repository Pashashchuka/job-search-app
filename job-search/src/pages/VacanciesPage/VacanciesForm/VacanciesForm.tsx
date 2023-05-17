import { Dispatch, FC, SetStateAction } from 'react'

import close from 'assets/icons/close.svg'

import InputSelect from 'components/InputSelect'
import Button from 'components/Button'

import { useVacanciesForm } from './hooks'

import styles from './VacanciesForm.module.scss'
import Input from 'components/Input'

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
  const { control, onSubmit, handleSubmit, handleClickResetBtn } =
    useVacanciesForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.filterBlock}>
      <div className={styles.titleBlock}>
        <h3 className={styles.title}>Фильтры</h3>
        <button className={styles.resetBtn} onClick={handleClickResetBtn}>
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
          <Input
            name="payment_from"
            control={control}
            handleArrowUpClick={handleClickArrowUpBtn}
            handleArrowDownClick={handleClickArrowDownBtn}
            placeholder="От"
          />
        </div>
        <div className={styles.salaryWrapper}>
          <Input
            name="payment_to"
            control={control}
            handleArrowUpClick={handleClickArrowUpBtn}
            handleArrowDownClick={handleClickArrowDownBtn}
            placeholder="До"
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
