import "../styles/styles.css";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  const Navbar = dynamic(() => import("./components/navbar"));

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
