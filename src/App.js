import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import PrivateRoute from './components/common/PrivateRoute';
import ParkDetails from './components/parks/ParkDetails';
import ParkForm from './components/parks/ParkForm';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import MyParks from './pages/MyParks';
import OwnerRequests from './pages/OwnerRequests';
import Parks from './pages/Parks';
import PendingParks from './pages/PendingParks';
import Register from './pages/Register';
import Requests from './pages/Requests';
// import PrivateRoute from './components/common/PrivateRoute';
import ResetPasswordPage from './pages/ResetPassword';

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/forgot-password" element={<ResetPasswordPage />} />
                            
                            <Route path="/parks" element={<Parks />} />
                            <Route path="/parks/:id" element={<ParkDetails />} />
                            
                            <Route element={<PrivateRoute />}>
                                <Route path="/my-parks" element={<MyParks />} />
                                <Route path="/parks/new" element={<ParkForm />} />
                                <Route path="/parks/:id/edit" element={<ParkForm editMode={true} />} />
                                
                                <Route path="/requests" element={<Requests />} />
                                <Route path="/owner/requests" element={<OwnerRequests />} />
                                
                                <Route path="/pending-parks" element={<PendingParks />} />
                            </Route>
                        </Routes>
                    </main>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;