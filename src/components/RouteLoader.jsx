import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader"; 

function RouteLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
   
    return <Loader />; 
  }


  return <>{children}</>;
}

export default RouteLoader;
