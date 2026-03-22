import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layouts/Root.jsx';
import Home from './pages/Home.jsx';
import AllApps from './pages/AllApps.jsx';
import AppDetails from './pages/AppDetails.jsx';
import MyInstallations from './pages/MyInstallations.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: "/", Component: Home },
      { path: "all-apps", Component: AllApps },
      { path: "app/:id", Component: AppDetails },
      { path: "my-installations", Component: MyInstallations }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
