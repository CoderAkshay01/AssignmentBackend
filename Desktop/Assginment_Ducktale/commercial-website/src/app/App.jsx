import Card from "../components/card/Card"
import Cart from "../components/cart/Cart"
import LandingPage from "../components/home/LandingPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage>
        <Card/>
      </LandingPage>
    },
    {
        path: "/cart",
        element: <LandingPage>
          <Cart/>
        </LandingPage>
      },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
