import Header from "@/components/header";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <>
        <Header {...pageProps} />
        <Component {...pageProps} />
      </>
    </AuthProvider>
  );
}
