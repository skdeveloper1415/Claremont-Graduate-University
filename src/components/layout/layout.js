import Top from "./top";
import Left from "./left";
import Head from "next/head";
import { Inter } from '@next/font/google'

const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})

export default function Layout({ children, ...pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to Claremont Graduate University</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Top topTab={pageProps.topTab} pageTitle={pageProps.pageTitle} pageName={pageProps.pageName} />         
        <Left />
        <div className={`${myInter.className} pl-[118px] xl:pl-[128px] pr-4 xl:pr-[0.833vw]  pb-6 xl:pb-[1.25vw] dark:bg-[#1C2026]`}>
          <main>
            {children}
          </main>
        </div>
      </>
    </>
  );
}
