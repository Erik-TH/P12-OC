import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import PropTypes from "prop-types";
import { useState } from "react";

import { UserAverageSessionDatas } from "../models/UserAverageSessionDatas";

export default function AverageSessionsDuration({ averageSessionsData }) {
  // const { sessions } = averageSessionsData;
  const [tooltipX, setTooltipX] = useState(0);

  const AVERAGE_SESSIONS_CLASS = new UserAverageSessionDatas(averageSessionsData);


  const formatTick = (value) => {
    const ticks = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    };
    return ticks[value];
  };



  return (
    <article className="statsCard statsCards__item averageSessionsDuration">
      <div className="averageSessionsDuration__overlay"></div>
      <h3 className="averageSessionsDuration__title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={AVERAGE_SESSIONS_CLASS._averageSessions}
          margin={{ left: -20, right: -20, top: 100, bottom: 15 }}

        >
          <Tooltip
            filterNull={false}
            separator=""
            itemStyle={{
              color: "#000000",
              backgroundColor: "#ffffff",
              fontSize: "10px",
              padding: "rem",
              margin: 3,
              border: 0,
            }}
            formatter={(name, value) => [name, ""]}
            contentStyle={{
              padding: ".4rem",
              backgroundColor: "#ffffff",
              border: 0,
            }}
            labelStyle={{
              display: "none",
            }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            strokeWidth={2}
            stroke="#fff"
          />
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.5)"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickFormatter={formatTick}
            dy={15}
            interval={0}
          />
          <YAxis hide={true} domain={["dataMin", "dataMax"]} />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
}

AverageSessionsDuration.prototype = {
  averageSessionDatas: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};


