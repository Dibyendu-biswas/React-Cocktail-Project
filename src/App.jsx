
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

import Home from './pages/Home'
import About from './pages/About'
import SingleError from './pages/SingleError'
import HomeLayout from './pages/HomeLayout'
import Error from './pages/Error'
import {loader as landingLoader} from "./pages/Home"
import {loader as singleLoader} from "./pages/Cocktail"
import Cocktail from './pages/Cocktail'
import Signup from './pages/Signup'

const queryClient= new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 *60 *5
    }
  }
})

export const router=createBrowserRouter([ 
  {
    path:"/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Home/>,
        errorElement:<SingleError/>,
        loader:landingLoader(queryClient),
        
      },
      {
        path:"cocktail/:id",
        element:<Cocktail/>,
        errorElement:<SingleError/>,
        loader:singleLoader(queryClient),

      },
    
      {
        path:"about",
        element:<About/>
      },
      {
        path:"signup",
        element:<Signup/>
      },
    ]
  },
 
 
])
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
<RouterProvider router={router}/>
<ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    </>
  )
}

export default App
