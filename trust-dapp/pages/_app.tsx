import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import Navbar from '../navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { SessionProvider } from 'next-auth/react'


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
  <SessionProvider session={session}>
  <>
  <Navbar/>
      <Component {...pageProps} />
  </>
  </SessionProvider>

  )
}
// import Wrapper from "../components/Wrapper";
//import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }) {
//   return (<>
//   {/* <Navbar/> */}
//   <SessionProvider session={pageProps.session}>
//     {/* <Wrapper> */}
//     <Component {...pageProps} />
//     {/* </Wrapper> */}

//   </SessionProvider>
//   </>
//   )
// }

//export default MyApp
