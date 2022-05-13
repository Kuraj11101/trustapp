import '../styles/globals.css'
import Navbar from '../navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (<>
  <Navbar/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
