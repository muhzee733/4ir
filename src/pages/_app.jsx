import '../app/Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
export default function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  },[])
  return <Component {...pageProps} />;
 
}