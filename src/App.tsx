import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home'
import { MainLayout } from './components/layout/MainLayout'


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
  ])
  return (
      <RouterProvider router={router} />
  )
}
