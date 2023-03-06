import s from "../styles/main.module.css";

const Hero = () => {
  return (
    <>
      <h1 className={`${s.main}`}>ADITYA</h1>
      <h1 className={`${s.main} ${s.secmain}`}>SHAH</h1>
      <h1 className={`${s.subhead}`}>The above text is only pc compatible</h1>
    </>
  );
};

export default Hero;
