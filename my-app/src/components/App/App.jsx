import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
//import PrivateRoute from '../../routes/PrivatRoutes';
import PublicRoute from '../../routes/PublicRoutes';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';
import AppBar from '../AppBar/AppBar';
import { ToastContainer } from 'react-toastify';

const PageHome = lazy(() => import('../../pages/PageHome/PageHome'));
const PageRegistration = lazy(() => import('../../pages/PageRegistration/PageRegistration'));
const PageLogin = lazy(() => import('../../pages/PageLogin/PageLogin'));



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
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <PublicRoute>
                    <PageHome />
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
