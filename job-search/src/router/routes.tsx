import { FC } from 'react'

import FavoritesPage from 'pages/FavoritesPage'
import VacanciesPage from 'pages/VacanciesPage'
import VacancyPage from 'pages/VacancyPage'
import ErrorPage from 'pages/ErrorPage'

import { PATHS } from './paths'

interface Routes {
  path: string
  component: FC
}

export const ROUTES: Routes[] = [
  {
    path: PATHS.VACANCIES,
    component: VacanciesPage,
  },
  {
    path: PATHS.ERROR,
    component: ErrorPage,
  },
  {
    path: PATHS.FAVORITES,
    component: FavoritesPage,
  },
  {
    path: `${PATHS.VACANCIES}/:id`,
    component: VacancyPage,
  },
]
