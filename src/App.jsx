import React from "react";
import { useSearchParams } from "react-router-dom";

import logo from "./assets/logo_sportsee.png";
import iconYoga from "./assets/icons/icon_yoga.png";
import iconSwimming from "./assets/icons/icon_swimming.png";
import iconBike from "./assets/icons/icon_bike.png";
import iconDumbbell from "./assets/icons/icon_dumbbell.png";

export default function App() {
  return (
        <section className="dashboard">

          <h1 className="dashboard__welcomeTitle">
            Bonjour <span className="dashboard__welcomeTitle--userFirstname">firstName</span>
          </h1>

          <p className="dashboard__message">Félicitation ! Vous avez explosé vos objectifs hier</p>

          <div className="stats">
            <div className="statsLeftColumn">
              <article className="statsCard dailyActivity"></article>
              <article className="statsCard averageTimeSession"></article>
              <article className="statsCard performance"></article>
              <article className="statsCard score"></article>
            </div>

            <div className="statsRightColumn">
              <article className="statsCard statsCardRight"></article>
              <article className="statsCard statsCardRight"></article>
              <article className="statsCard statsCardRight"></article>
              <article className="statsCard statsCardRight"></article>
            </div>
          </div>

        </section>
  );
}