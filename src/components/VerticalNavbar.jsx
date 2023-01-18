import yoga from "../assets/icons/icon_yoga.png";
import swimming from "../assets/icons/icon_swimming.png";
import bike from "../assets/icons/icon_bike.png";
import dumbbell from "../assets/icons/icon_dumbbell.png";

export default function VerticalNavbar() {
    return (
        <div className="verticalNavbar">
        <img src={yoga} alt="yoga" />
        <img src={swimming} alt="swimming" />
        <img src={bike} alt="bike" />
        <img src={dumbbell} alt="dumbbell" />
        <p>Copiryght, SportSee 2020</p>
      </div>
    )
}