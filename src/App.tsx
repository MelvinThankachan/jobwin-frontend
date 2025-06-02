import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/public/landing-page";
import NotFoundPage from "./pages/public/not-found-page";
import { ThemeProvider } from "./hooks/theme-provider";
import { ThemeToggleSwitch } from "./components/shared/theme-toggle-switch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="absolute bottom-4 right-4">
        <ThemeToggleSwitch />
      </div>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
