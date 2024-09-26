import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivatRoutes';
import PublicRoute from '../../routes/PublicRoutes';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import { ToastContainer } from 'react-toastify';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const PageRegistration = lazy(() => import('../../pages/PageRegistration/PageRegistration'));
const PageLogin = lazy(() => import('../../pages/PageLogin/PageLogin'));
const Modal = lazy(() => import('../../pages/Modal/Modal'));
const DiaryPage = lazy(() => import('../../pages/DiaryPage/DiaryPage'));
const Calculator = lazy(() => import('../../pages/Calculator/Calculator'));



const App = () => {
   const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <PublicRoute>
                    <MainPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/modal"
                element={
                  <PublicRoute>
                    <Modal />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute >
                    <PageRegistration />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute>
                    < PageLogin />
                  </PublicRoute>
                }
              />
              <Route
                path="diary"
                element={
                  <PrivateRoute>
                    <DiaryPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="calculator"
                element={
                  <PrivateRoute>
                    <Calculator />
                  </PrivateRoute>
                }
              />
             
              <Route path="*" element={<Navigate to="/" />} />              
            </Routes>
          </Suspense>
          <ToastContainer autoClose={3700} position="top-center" />
        </>
      )}
    </>
  );
};

export default App;
