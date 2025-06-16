import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home } from "./components/Home"
import AddMeal from "./components/AddMeal";
import EditMeal from "./components/EditMeal";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "addmeal",
    element: <AddMeal/>
  },
  {
    path: "editmeal/:id",
    element: <EditMeal/>
  },
  {
    path: "about",
    element: <About/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
