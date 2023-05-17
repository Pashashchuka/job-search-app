import { useEffect, useState } from 'react'

import { getCatalogues } from 'api'

export const useInputSelect = () => {
  const [catalogues, setCatalogues] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCatalogues()
      setCatalogues(response)
    }

    fetchData()
  }, [])

  return { catalogues }
}
