import Image from "next/image";
import Head from "next/head";
import s from "@/app/styles/main.module.css";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <body>
        <Menu />
        <div className={`${s.aditya} ${s.stretch}`}>ADITYA</div>
        <div className={`${s.shah} ${s.stretch}`}>SHAH</div>
        <div className={s.container}>
          {/* <div className={`${s.subtext}`}>
            A Front-End Web Developer Creating Thoughtful, Intuitive Designs.
          </div> */}
          {/* <div className={`${s.subtextslash}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            atque ipsum. Nesciunt, a delectus repudiandae atque, suscipit aut
            quisquam doloribus quaerat error voluptatem illum quam nisi aperiam
            perferendis aliquid ducimus.
          </div> */}
        </div>
      </body>
    </>
  );
}
