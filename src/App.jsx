// rrd import
import { createBrowserRouter , RouterProvider } from "react-router-dom"
// layout
import MainLayout from "./layout/MainLayout"
// Pages
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Kompny from "./pages/kompani/Kompny"
import Otziv from "./pages/otziv/Otziv"
import Regstrstion from "./pages/registration/Regstrstion"
import Contact from "./pages/contact/Contact"
// import Error from "./pages/error/Error"



const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      // element: <Error/>,
      children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },

      {
        path: '/kompani',
        element: <Kompny/>
      },  
      {
        path: '/otziv',
        element: <Otziv/>
      },
      {
        path: '/registration',
        element: <Regstrstion/>
      },
    
      {
        path: '/contact',
        element: <Contact/>
      },
      // {
      //   path: '*',
      //   element: <Error/>
      // }
    ]
    }
   ]);
  
   return <RouterProvider router={routes}/>
  
}

export default App