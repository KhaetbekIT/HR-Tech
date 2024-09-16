"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

    const router = useRouter()

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            router.push('/login');
        }
    }, [router]);

    return <>{children}</>;
};