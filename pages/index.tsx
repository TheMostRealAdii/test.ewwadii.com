import Head from "next/head";
import Hero from "./components/Main";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta
          name="description"
          content="This subdomain is only for test purposes some design may or maynot be compatible with other px devices like mobile or tab you can check updates of this website on https://github.com/ewwadii/test.ewwadii.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Menu />
      <Hero />
    </>
  );
}
