import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";  
import "../App.css";

const Login = ({ onLoginSuccess }) => {
    const googleSignIn = async () => {
        try {
            onLoginSuccess();

            toast.success("Login successful!", {
                autoClose: 1000,
                theme: "light",
            });
        } catch (error) {
            console.error("Login failed", error);
            toast.error("Login failed. Please try again.", {
                autoClose: 1000,
                theme: "light",
            });
        }
    };

    return (
        <div className="google-page">
            <main className="d-flex flex-column align-items-center justify-content-center min-vh-100 py-5">
                <div className="google-effect" style={{ backgroundColor: "darkgray", height: "300px", width: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "8px" }}>
                    <p className="h4 text-center text-secondary mb-4 text-white">Sign in with Google</p>
                    <button
                        onClick={googleSignIn}
                        className="btn-lg d-flex align-items-center justify-content-center px-4 py-2 rounded shadow"
                        style={{
                            width: '100%',
                            maxWidth: '250px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: "lightblue",
                            border: "none",
                        }}
                    >
                        <FcGoogle className="mr-2 me-2" style={{ fontSize: "1.5rem" }} /> <span style={{ fontWeight: "bold" }}>Sign in with Google</span>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
