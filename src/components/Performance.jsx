import React from "react";
import PropTypes from "prop-types";

import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import UserPerformanceDatas from "../models/UserPerformanceDatas"


const Performance = ({ performanceDatas }) => {
  performanceDatas.data.reverse()
  const PERFORMANCE_CLASS = new UserPerformanceDatas(performanceDatas);

  const formatTick = (value) => {
    const translateFr = {
      cardio: "Cardio",
      energy: "Energie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };
    return translateFr[value];
  };

  return (
    <article className="statsCard statsCards__item performance">
      <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        outerRadius={65}
        width={230}
        height={230}
        data={PERFORMANCE_CLASS.performance}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: "#ffffff", fontSize: 10 }}
          axisLine={true}
          tickLine={true}
          tickFormatter={formatTick}
        />

        <PolarRadiusAxis
          tickCount={6}
          domain={[0, 150]}
          axisLine={false}
          tick={false}
        />

        <Radar
          dataKey="value"
          stroke="rgba(230, 0, 0, .7)"
          fill="#E60000"
          fillOpacity={0.6}
        />
      </RadarChart>
      </ResponsiveContainer>
    </article>
  );
}

Performance.propTypes = {
  performanceData: PropTypes.object,
};

export default Performance