import { FC } from 'react'

import FavoritesPage from 'pages/FavoritesPage'
import SearchPage from 'pages/SearchPage'
import ErrorPage from 'pages/ErrorPage'

import { PATHS } from './paths'

interface Routes {
  path: string
  component: FC
}

export const ROUTES: Routes[] = [
  {
    path: PATHS.SEARCH,
    component: SearchPage,
  },
  {
    path: PATHS.ERROR,
    component: ErrorPage,
  },
  {
    path: PATHS.FAVORITES,
    component: FavoritesPage,
  },
]
