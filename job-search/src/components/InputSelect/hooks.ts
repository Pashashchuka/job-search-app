import { useEffect, useState } from 'react'

import { getCatalogues } from 'api'

export const useInputSelect = () => {
  const [catalogues, setCatalogues] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCatalogues()
      localStorage.setItem('catalogues', JSON.stringify(response))

      const currentCatalogues = response.map(
        ({ title }: { title: string }) => title,
      )

      setCatalogues(currentCatalogues)
    }

    fetchData()
  }, [])

  return { catalogues }
}
