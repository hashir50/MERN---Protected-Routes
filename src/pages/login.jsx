import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const LoginPage = () => {
    const { login, logout ,isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        login();
console.log(isAuthenticated);
        navigate("/products");
    };
    const handleLogout = () => {
        logout();
       // navigate("/login");
    };

    return (

        <div>
            <div>
                <button
                    className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={handleLogin}>Login</button>
            </div>
            <div>
                {/* <button
                    className="px-6 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300"
                    onClick={handleLogout}>Logout</button> */}
            </div>
        </div>
    );
};

export default LoginPage;
