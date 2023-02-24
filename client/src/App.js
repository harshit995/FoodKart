import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/context/ProtectedRoute';
import PublicRoute from './components/context/PublicRoute';
import ApplyDoctor from './pages/ApplyDoctor';

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={
              // <ProtectedRoute>
              <HomePage />
              // </ProtectedRoute>
            }
          />
          <Route path='/apply-doctor'
            element={
              // <ProtectedRoute>
              <ApplyDoctor />
              // </ProtectedRoute>
            }
          />

          <Route path='/login'
            element={
              // <PublicRoute>
              <Login />
              /* </PublicRoute> */
            }
          />

          <Route path='/register' element={
            // <PublicRoute>
            <Register />
            // </PublicRoute>
          }
          />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
