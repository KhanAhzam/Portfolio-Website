import { useEffect, useState } from "react";
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Splashscreen from "./components/Minor Sections/SplashScreen";
import { Analytics } from "@vercel/analytics/react";

//Remove below
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);                    // simulate loading (3.5s)
    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      <Analytics />
      {loading ? (
        <Splashscreen />
      ) : (
        <RouterProvider router={router} />
      )}
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;

