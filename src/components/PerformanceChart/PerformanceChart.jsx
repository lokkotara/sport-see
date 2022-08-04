import "./PerformanceChart.scss";
import PropTypes from "prop-types";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";
import { store } from "../../providers/Store";

const customTick = ({ payload, x, y, textAnchor, stroke }) => {
  return (
    <g className="recharts-layer recharts-polar-angle-axis-tick">
      <text
        stroke={stroke}
        y={y + 3}
        fontSize="0.75rem"
        fontWeight="500"
        className="recharts-text recharts-polar-angle-axis-tick-value"
        textAnchor={textAnchor}
      >
        <tspan x={x} style={{ fill: "white" }}>
          {payload.value}
        </tspan>
      </text>
    </g>
  );
};

export default function PerformanceChart() {
  return (
    <div className="performanceChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={85} data={store.get.USER_PERFORMANCE.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={customTick}
            tickSize={12}
            orient="top"
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, "dataMax+20"]}
            tick={false}
            axisLine={false}
          />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

customTick.propTypes = {
  payload: PropTypes.shape({
    coordinate: PropTypes.number,
    value: PropTypes.string,
    index: PropTypes.number,
    offest: PropTypes.number,
  }),
  x: PropTypes.number,
  y: PropTypes.number,
  textAnchor: PropTypes.string,
  stroke: PropTypes.string,
};

// PerformanceChart.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       kind: PropTypes.string,
//       value: PropTypes.number
//     })
//   )
// }