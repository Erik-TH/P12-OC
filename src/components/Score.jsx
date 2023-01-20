import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

export default function Score({ userScoreDatas }) {
  const COLORS = ["red", "transparent"];
  return (
    <article className="statsCards__item darkBackground score">
      <h3 className="score__title">Score</h3>
      <div className="score__value">
        <div className="score__value--number">{userScoreDatas[0].value}%</div>
        <div className="score__value--text">
          de votre
          <br />
          objectif
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={userScoreDatas}
            dataKey="value"
            cx="50%"
            cy="50%"
            cornerRadius={5}
            innerRadius={70}
            outerRadius={80}
            startAngle={210}
            endAngle={-210}
            fill="red"
          >
            {/* <Cell fill="#FF0000" stroke="#E60000" />
            <Cell fill="transparent" stroke="transparent" /> */}
            {/* {userScoreDatas.map((index) => (
              <Cell key={`cell-${index}`} fill="red" />
            ))} */}
            {userScoreDatas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </article>
  );
}

Score.prototype = {
  userScoreDatas: PropTypes.shape({
    score: PropTypes.number,
  }).isRequired,
};
