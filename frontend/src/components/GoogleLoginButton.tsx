"use client";

// @ts-ignore
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton: React.FC = () => {
    const handleSuccess = async (response: any) => {
        try {
            console.log("Google Login Success", response);
            
            const res = await axios.post("http://127.0.0.1:8000/auth/social/login/google/", {
                access_token: response.credential,
            });

            console.log("User logged in:", res.data);
            localStorage.setItem("authToken", res.data.key);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const handleFailure = (error: any) => {
        console.error("Google Login Error:", error);
    };

    return (
        <div className="p-4">
            <GoogleLogin onSuccess={handleSuccess} onError={() => console.error("Login Failed")} />
        </div>
    );
};

export default GoogleLoginButton;
