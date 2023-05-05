import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom'
import { StartPage } from './Views/StartPage'
import { Fretboard } from './Views/Fretboard'
import { ErrorPage } from './Views/ErrorPage'

type Route = Pick<RouteObject, 'path' | 'element' | 'errorElement'>
export const routes = {
  home: buildRoute({ path: '/', element: <StartPage /> }),
  fretboard: buildRoute({ path: 'fretboard', element: <Fretboard /> })
}

function buildRoute ({
  path,
  element,
  errorElement = <ErrorPage />
}: Route) {
  return {
    path,
    element,
    errorElement
  }
}

const router = createBrowserRouter([
  routes.home,
  routes.fretboard
])

export function Routes () {
  return <RouterProvider router={router} />
}
