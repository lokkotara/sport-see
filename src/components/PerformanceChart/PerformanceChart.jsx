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

/**
 * @typedef {import ("../../interfaces/interface").customTickProps} customTickProps
 */

/** @param {customTickProps} props*/
const CustomTick = ({ payload, x, y, textAnchor, stroke }) => {
  if (y) y=y+3
  return (
    <g className="recharts-layer recharts-polar-angle-axis-tick">
      <text
        stroke={stroke}
        y={y}
        fontSize="0.75rem"
        fontWeight="500"
        className="recharts-text recharts-polar-angle-axis-tick-value"
        textAnchor={textAnchor}
      >
        <tspan x={x} style={{ fill: "white" }}>
          {payload?.value}
        </tspan>
      </text>
    </g>
  );
};

export default function PerformanceChart() {
  return (
    <div className="performanceChart chart">
      <ResponsiveContainer width={'99%'}>
        <RadarChart outerRadius={85} data={store.get.USER_PERFORMANCE.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={<CustomTick/>}
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

CustomTick.propTypes = {
  payload: PropTypes.object,
  x: PropTypes.number,
  y: PropTypes.number,
  textAnchor: PropTypes.string,
  stroke: PropTypes.string,
};