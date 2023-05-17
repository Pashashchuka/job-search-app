import { FC } from 'react'
import { Select } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

import styles from './InputSelect.module.scss'

const InputSelect: FC = () => {
  return (
    <Select
      placeholder="Выберете отрасль"
      rightSection={<IconChevronDown className={styles.arrow} />}
      rightSectionWidth={30}
      radius="md"
      size="md"
      className={styles.select}
      data={[]}
    />
  )
}

export default InputSelect
