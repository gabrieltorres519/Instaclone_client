import React, {useState, useEffect, useMemo} from 'react';
import {ApolloProvider} from "@apollo/client";
import { ToastContainer} from "react-toastify";
import client from "./config/apollo.js";
import Auth from './pages/Auth';
import {getToken, decodeToken} from "./utils/token";
import AuthContext from './context/AuthContext.js';
// import Home from "./pages/Home";
import Navigation from './routes/Navigation.js';




export default function App() {
  const [auth, setAuth] = useState(undefined);
  // const authData = {
  //   name: "Agustin mg",
  // };

  useEffect(() => {
    const token = getToken();
    console.log(token+' es el token');
    if(!token){
      setAuth(null);
    }else{
      setAuth(decodeToken(token));
    }
    
  }, []);

  const logout = () => {
    console.log("Cerrar sesión");
  };

  const setUser = (user) => {
    setAuth(user);
  };

  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser,
    }),
    [auth]
  );


  //La línea siguiente arreglaba el problema de que el login apareciía al buscar un usuario por url pero 
  //al usarla ya no me muestra el login
  //if(auth == undefined) return null; 

  return (
    <ApolloProvider client={client}>
       <AuthContext.Provider value={authData}> 
          {!auth ? <Auth/> : <Navigation/>}
           <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </AuthContext.Provider> 
    </ApolloProvider>
  );
}


