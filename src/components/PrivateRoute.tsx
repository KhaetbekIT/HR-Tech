"use client";
import React, { useEffect } from "react";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            window.location.replace('/login');
        }
    }, [location]);

    return <>{children}</>;
};