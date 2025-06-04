import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/public/landing-page";
import NotFoundPage from "./pages/public/not-found-page";
import { ThemeProvider } from "./hooks/theme-provider";
import { ThemeToggleSwitch } from "./components/shared/theme-toggle-switch";
import PublicPageLayout from "./pages/public/public-page-layout";
import FindJobsPage from "./pages/public/find-jobs-page";
import BrowseCompaniesPage from "./pages/public/browse-companies-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicPageLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "find-jobs",
        element: <FindJobsPage />,
      },
      {
        path: "browse-companies",
        element: <BrowseCompaniesPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed bottom-4 right-4">
        <ThemeToggleSwitch />
      </div>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
