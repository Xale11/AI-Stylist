import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { Provider } from './components/ui/provider'

const router = createBrowserRouter([...routes])

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Provider> {/* ChakraUi */}
      <RouterProvider router={router}/>
    </Provider>
    
  </StrictMode>,
)
