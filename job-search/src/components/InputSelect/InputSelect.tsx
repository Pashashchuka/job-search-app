import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import { IconChevronDown } from '@tabler/icons-react'
import { Select } from '@mantine/core'

import { FormValues } from 'pages/VacanciesPage/hooks'

import { useInputSelect } from './hooks'

import styles from './InputSelect.module.scss'

interface IInputSelectProps {
  control: Control<FormValues>
}

const InputSelect: FC<IInputSelectProps> = ({ control }) => {
  const { catalogues } = useInputSelect()

  return (
    <Controller
      name="catalogues"
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select
          placeholder="Выберете отрасль"
          rightSection={<IconChevronDown className={styles.arrow} />}
          rightSectionWidth={30}
          onChange={onChange}
          value={value ?? ''}
          radius="md"
          size="md"
          className={styles.select}
          data={catalogues}
        />
      )}
    />
  )
}

export default InputSelect
