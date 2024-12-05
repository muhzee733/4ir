import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-qS1XMKS2Fz5zz44D76T4v3E/mI8eF+q8I5CfWZcOyzbK8TLaQv8fQub56upN+TAz"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  )
}