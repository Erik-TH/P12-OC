import iconYoga from "../assets/icons/icon_yoga.png";
import iconSwimming from "../assets/icons/icon_swimming.png";
import iconBike from "../assets/icons/icon_bike.png";
import iconDumbbell from "../assets/icons/icon_dumbbell.png";

export default function VerticalNavbar() {
  return (
    <nav className="verticalNavbar">
      <ul className="verticalNavbar__links">
        <li>
          <img
            className="verticalNavbar__links--icons"
            src={iconYoga}
            alt="yoga"
          />
        </li>
        <li>
          <img
            className="verticalNavbar__links--icons"
            src={iconSwimming}
            alt="swimming"
          />
        </li>
        <li>
          <img
            className="verticalNavbar__links--icons"
            src={iconBike}
            alt="bike"
          />
        </li>
        <li>
          <img
            className="verticalNavbar__links--icons"
            src={iconDumbbell}
            alt="dumbbell"
          />
        </li>
      </ul>
      <p className="verticalNavbar__copyright">Copyright, SportSee 2020</p>
    </nav>
  );
}
