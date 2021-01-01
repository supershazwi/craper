import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Craper - Scrape websites</title>

        <link rel="stylesheet" href="/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/libs/@fortawesome/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="/css/quick-website.css" id="stylesheet" />
      </Head>

      {children}

      <script src="/libs/jquery/dist/jquery.min.js"></script>
      <script src="/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/libs/svg-injector/dist/svg-injector.min.js"></script>
      <script src="/libs/in-view/dist/in-view.min.js"></script>
      <script src="/libs/sticky-kit/dist/sticky-kit.min.js"></script>
      <script src="/libs/imagesloaded/imagesloaded.pkgd.min.js"></script>
      <script src="/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.js"></script>
      <script src="/libs/apexcharts/dist/apexcharts.min.js"></script>
      <script src="/libs/progressbar.js/dist/progressbar.min.js"></script>
      <script src="/js/quick-website.js"></script>
      
    </div>
  )
}