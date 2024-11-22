// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import MainLayout from './components/layout/MainLayout';
import LoginPage from './features/auth/LoginPage';
import CandidateDashboard from './features/candidate/CandidateDashboard';
import EducatorDashboard from './features/educator/EducatorDashboard';
import PrivateRoute from './components/common/PrivateRoute';
import AdminDashboard from './features/admin/AdminDashboard';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Protected routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              {/* Candidate routes */}
              <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
              
              {/* Educator routes */}
              <Route path="/candidate/assessments" element={<EducatorDashboard />} />
              
              {/* Admin routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;