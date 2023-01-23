import PropTypes from "prop-types";

/**
 * Component for the Nutritional card.
 * @param {string} type The type of CardNutrition, one of ["calories", "proteines", "glucides", "lipides"]
 * @param {number} value The quantity of nutritional data
 * @param {string} icon Link of the icon
 * @returns {ReactComponentElement} Component stat displayed aside on the right column of the dashboard
 */
export default function CardNutrition({ type, value, icon }) {
  const unit = type === "calories" ? "kCal" : "g";
  return (
    <article className={`statsCards__item statsSummary__item darkBackground ${type}`}>
      <div className="statsSummary__item--icon">
        <img src={icon} alt={type} />
      </div>
      <div className="statsSummary__infos">
        <p className="statsSummary__infos--value">
          {value}
          {unit}
        </p>
        <p className="statsSummary__infos--type">{type}</p>
      </div>
    </article>
  );
}

CardNutrition.prototype = {
  type: PropTypes.oneOf(["calories", "proteines", "glucides", "lipides"])
    .isRequired,
    value: PropTypes.number,
  icon: PropTypes.string.isRequired,
};
