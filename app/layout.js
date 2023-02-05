
import { Suspense } from "react";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import Loading from "./loading";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Layout>
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense></Layout>
      </body>
    </html>
  );
}
