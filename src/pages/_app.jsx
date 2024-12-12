import { useEffect } from 'react';
import '../app/Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    require('bootstrap/js/index.esm');
  },[])
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
