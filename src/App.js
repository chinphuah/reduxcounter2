import {createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound'
import RootLayout from './RootLayout'


import {Provider} from 'react-redux'
import store from './store'
import Counter from './Counter'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Counter />}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

// Store




// Actions




function App () {
     return (

      <Provider store={store}>
        <RouterProvider router={router} />  
      </Provider>   
    )
  }

export default App;


