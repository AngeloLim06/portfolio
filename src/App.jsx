import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './Portfolio';


const router = createBrowserRouter([
    {
      path:"/portfolio/", 
      element:<Portfolio/>, 
      
      
    }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;