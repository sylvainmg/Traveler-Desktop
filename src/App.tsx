import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Bookings from "./pages/Bookings";
import Partenariats from "./pages/Partenariats";
import Account from "./pages/Account";
import Clients from "./pages/Clients";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";
import React from "react";
import Login from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";
import { FaSpinner } from "react-icons/fa";

function App() {
    const [showNavbar, setShowNavbar] = useState(false);
    const { token, refreshToken } = useAuth();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        (async () => {
            if (!token) {
                const newToken = await refreshToken();
                setIsAuthenticated(!!newToken);
            } else {
                setShowNavbar(true);
                setIsAuthenticated(true);
            }
            setLoading(false);
        })();
    }, [token]);

    if (loading)
        return (
            <div className="flex justify-center items-center">
                <FaSpinner size={56} className="animate-spin" />
            </div>
        );

    return (
        <React.Fragment>
            <nav className="select-none">{showNavbar && <Navbar />}</nav>
            <main className="selection:bg-fuchsia-400">
                <Routes>
                    <Route
                        path="/"
                        element={
                            isAuthenticated ? (
                                <Home />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/clients"
                        element={<Clients setShowNavbar={setShowNavbar} />}
                    />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/partenariats" element={<Partenariats />} />
                    <Route
                        path="/account"
                        element={<Account setShowNavbar={setShowNavbar} />}
                    />
                </Routes>
            </main>
        </React.Fragment>
    );
}

export default App;
