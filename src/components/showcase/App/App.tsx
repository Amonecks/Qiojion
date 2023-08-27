import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { authRoutes, publicRoutes, notAuthRoutes } from "../../../routes/routesConfig";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { API_URL } from "../../../constants/constants";
import { login } from "../../../store/slices/profileSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const App: React.FC = (): JSX.Element => {

  const dispatch = useDispatch();
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);
  const { pathname } = useLocation();

  const isAuth = useAuth();

  useEffect(() => {

    if (localStorage.getItem('token')) {

      axios({
        method: 'GET',
        url: `${API_URL}/auth`,
        params: {
          token: localStorage.getItem('token'),
        }
      })
        .then(res => {
          dispatch(login(res.data));
        });
  
    }

  }, [dispatch]);

  useEffect(() => {

    window.scrollTo(0, 0);
    setMobileMenuVisibility(false);

  }, [pathname]);

  return (
    <>

      <Header isMobileMenuVisible={isMobileMenuVisible} setMobileMenuVisibility={setMobileMenuVisibility} />

      <main className="main">

        <Routes>

          {/* authRoutes / notAuthRoutes */}
          {
            isAuth ? (
              authRoutes.map(({ path, element}, index) => {
                return (
                  <Route
                    key={index}
                    path={path}
                    element={element}
                  />
                )
              })
            ) : (
              notAuthRoutes.map(({ path, element}, index) => {
                return (
                  <Route
                    key={index}
                    path={path}
                    element={element}
                  />
                )
              })
            )
          }
          {/* publicRoutes */}
          {
            publicRoutes.map(({ path, element }, index) => {
              return (
                <Route
                  key={index}
                  path={path}
                  element={element}
                />
              )
            })
          }
          
        </Routes>

      </main>

      <Footer />

    </>
  )

}

export default App;