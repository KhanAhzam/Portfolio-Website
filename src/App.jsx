import { useEffect, useState } from "react";
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Splashscreen from "./components/Minor Sections/SplashScreen2";

//Remove below
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);                    // simulate app loading (3.5s)
    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      {loading ? <Splashscreen /> : <RouterProvider router={router} />}
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;

