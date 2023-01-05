import React from "react";
import { useSearchParams } from "react-router-dom";

import logo from "./assets/logo_sportsee.png";
import iconYoga from "./assets/icons/icon_yoga.png";
import iconSwimming from "./assets/icons/icon_swimming.png";
import iconBike from "./assets/icons/icon_bike.png";
import iconDumbbell from "./assets/icons/icon_dumbbell.png";

export default function App() {
  return (
    <div className="App">

      <header className="header">

        <img className="header__logo" src={logo} alt="SportSee's logo" />

        <nav className="header__navBar">
          <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>

      </header>

      <main>

        <nav className="verticalNavBar">
          <ul className="verticalNavBar__links">
            <li>
             <img className="verticalNavBar__links--icons" src={iconYoga} alt="yoga" />
            </li>
            <li>
              <img className="verticalNavBar__links--icons" src={iconSwimming} alt="swimming" />
            </li>
            <li>
              <img className="verticalNavBar__links--icons" src={iconBike} alt="bike" />
            </li>
            <li>
              <img className="verticalNavBar__links--icons" src={iconDumbbell} alt="dumbbell" />
            </li>
          </ul>
          <p className="verticalNavBar__copyright">Copyright, SportSee 2020</p>
        </nav>

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
      </main>
    </div>
  );
}