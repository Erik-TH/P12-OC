import logo from "../assets/logo_sportsee.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="SportSee's logo" />

      <nav className="header__navbar">
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}