"use client"
import { client } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'], weight: ['400', "500", "600"] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ApolloProvider client={client}>
            <html lang="en">
                <body
                    className={inter.className}
                >
                    {children}
                </body>
            </html>
        </ApolloProvider>
    );
}