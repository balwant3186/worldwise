import React from "react";
import classes from "./HomePage.module.scss";
import PageNav from "../../components/PageNav/PageNav";
import { Link } from "react-router-dom";

type HomePageProps = {
  children?: React.ReactNode;
};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <main className={classes.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
};
export default HomePage;
