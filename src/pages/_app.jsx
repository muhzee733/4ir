import Script from 'next/script';
import {  Head } from 'next/document'

import '../app/Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
 
}
