import s from "../styles/main.module.css";

const Hero = () => {
  return (
    <>
      <div className={`${s.firsttitle}`}>ADITYA</div>
      <div className={`${s.firsttitle} ${s.secondtitle}`}>SHAH</div>
      <div className={`${s.subtitle}`}>
        Front-End Web Developer And UI/UX Designer{" "}
      </div>
      <div className={`${s.subtitle}`}>
        Creating Thoughtful, Intuitive Designs.
      </div>
    </>
  );
};

export default Hero;
