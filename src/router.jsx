import { createBrowserRouter } from 'react-router-dom';

import LandingPage from "./pages/LandingPage" ;


const router = createBrowserRouter([

    {
        path: '/',
        element: <LandingPage />,
        // errorElement: <ErrorPage />
    },




    // { path: '/', element: <LandingPage /> },
    // {
    //     path: '/vendor',
    //     children: [
    //         { path: 'register', element: <VendorFlow /> },
    //     ],
    // },
    // { path: '*', element: <NotFound /> },
    // { 
    //     path: '/', 
    //     element: <LandingPageNew />,
    //     errorElement: <ErrorPage />
    // },
    // { 
    //     path: '/VendorRegistration', 
    //     element: <VendorRegistration />,
    //     errorElement: <ErrorPage />
    // }
]);

export default router;