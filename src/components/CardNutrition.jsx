import PropTypes from "prop-types";

/**
 * React component for Nutritional card.
 *
 * @param {string} type The type of CardUserData, one of ["calories", "proteines", "glucides", "lipides"]
 * @param {number} quantity The quantity of nutritional data
 * @param {string} icon Link or data about the icon
 * @returns {ReactComponentElement} A react component
 */
export default function CardNutrition({ type, value, icon }) {
  const unit = type === "calories" ? "kCal" : "g";
  return (
    <article className={`statsSummary__item ${type}`}>
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
