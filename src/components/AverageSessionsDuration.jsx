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

  const AVERAGE_SESSIONS_CLASS = new UserAverageSessionDatas(averageSessionsData);

  const [tooltipX, setTooltipX] = useState(0);

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

  const CustomTooltip = ({ active, payload, coordinate }) => {
    if (active && payload && payload.length) {
      if (payload[0].payload.tickDisplay === false) return null;
      setTimeout(() => setTooltipX(coordinate.x), 0);
      return <div className="averageSessionsDuration__customTooltip">{`${payload[0].value} min`}</div>;
    }
    return null;
  };

  const drawOverlay = (state) => {
    if (state.isTooltipActive) {
      const overlay = document.querySelector(".averageSessionsDuration__overlay");
      const container = document.querySelector(".averageSessionsDuration");
      const containerWidth = container.clientWidth;
      const calculatedWidth = containerWidth - tooltipX;
      overlay.style.width = calculatedWidth + "px";
    } else {
      deleteOverlay();
    }
  };

  const deleteOverlay = () => {
    const overlay = document.querySelector(".averageSessionsDuration__overlay");
    overlay.style.width = "0px";
  };

  return (
    <article className="statsCards__item averageSessionsDuration">
      <div className="averageSessionsDuration__overlay"></div>
      <h3 className="averageSessionsDuration__title">
        Durée moyenne des sessions
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={AVERAGE_SESSIONS_CLASS._averageSessions}
          margin={{ left: 10, right: 10, top: 100, bottom: 15 }}
          onMouseMove={drawOverlay}
          onMouseLeave={deleteOverlay}
        >
          <Tooltip
            content={<CustomTooltip />}
            cursor={false}
            wrapperStyle={{ outline: "none" }}
            animationDuration={0}
            margin={{ right: -100 }}
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
