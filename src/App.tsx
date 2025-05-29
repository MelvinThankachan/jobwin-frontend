import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/public/landing-page";
import NotFoundPage from "./pages/public/not-found-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
