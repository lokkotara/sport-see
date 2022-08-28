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

/**
 * @typedef {import ("../../interfaces/interface").customTickProps} customTickProps
 * @typedef {import ("../../interfaces/interface").userPerformanceData} userPerformanceData
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

/**
 * Allows you to create a spiderweb chart with the data passed as a parameter
 * @param {userPerformanceData} props An object containing the user's data
 * @returns {JSX.Element}
 */
export default function PerformanceChart({data}) {
  return (
    <div className="performanceChart chart">
      <ResponsiveContainer width={'99%'}>
        <RadarChart outerRadius={85} data={data}>
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

PerformanceChart.propTypes = {
  data: PropTypes.array.isRequired
}