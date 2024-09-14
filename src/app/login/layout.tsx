"use client"
import { client } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import React from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ApolloProvider client={client}>
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        </ApolloProvider>
    );
}
