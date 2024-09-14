"use client"
import { client } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import classNames from "classnames";
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
                    className={classNames(inter.className)}
                >
                    {children}
                </body>
            </html>
        </ApolloProvider>
    );
}