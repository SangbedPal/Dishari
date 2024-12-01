import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from "./pages/Home.jsx";
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from "./pages/Profile.jsx";
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/sign-in",
        element: <SignIn />
    },

    {
        path: "/sign-up",
        element: <SignUp />
    }, 

    {
        path: "/profile",
        element: <Profile />
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
