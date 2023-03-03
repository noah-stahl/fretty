import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StartPage } from './Views/StartPage'
import { Fretboard } from './Views/Fretboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />
  },
  {
    path: 'mui',
    element: <Fretboard />
  }
])

export function Routes () {
  return <RouterProvider router={router} />
}
