
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { useEffect} from "react";
import { useSelector } from "react-redux";

import StudentDashboard from "./components/studentDashboard"
import AdminDashboard from './components/adminDashboard';
import ProtectedRoute from './components/Route/protectedRoute';
import AdminProtected from './components/Route/adminProtected';
import StudentList from './admin/StudentList';
import AdminQRCodeDisplay from './components/QRCode';

function App() {

  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const {adminisAuthenticated, adminuser, adminloading} = useSelector((state) => state.admin);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  }, []);
  return (
     <>
     <Router>
         <Routes>
             <Route exact path="/" element={<Home />} />
             <Route
                exact
                path="/admin/dashboard"
                element={
                    <AdminProtected adminisAuthenticated={adminisAuthenticated} adminuser={adminuser} adminloading={adminloading}>
                     <AdminDashboard />
                  </AdminProtected>
                  }
                  />
                   <Route
                exact
                path="/all-students"
                element={
                    <AdminProtected adminisAuthenticated={adminisAuthenticated} adminuser={adminuser} adminloading={adminloading}>
                     <StudentList/>
                  </AdminProtected>
                  }
                  />
                      <Route
                exact
                path="/admin/qrcode"
                element={
                    <AdminProtected adminisAuthenticated={adminisAuthenticated} adminuser={adminuser} adminloading={adminloading}>
                     <AdminQRCodeDisplay/>
                  </AdminProtected>
                  }
                  />
             <Route
                exact
                path="/student/dashboard"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated} user={user} loading={loading}>
                     <StudentDashboard />
                  </ProtectedRoute>
                  }
                  />
                
            </Routes>
     </Router>
     </>
  );
}

export default App;
