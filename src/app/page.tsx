import { PrivateRoute } from "@/components/PrivateRoute";
import type { AppProps } from "next/app";

export default function Home({ Component, pageProps }: AppProps) {

  const token = localStorage.getItem("access_token")

  return token ? <>
    <Component {...pageProps} />
  </> : <PrivateRoute>
    <Component {...pageProps} />
  </PrivateRoute>
}
