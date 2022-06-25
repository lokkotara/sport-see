import "./PerformanceChart.scss";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { store } from "../../providers/Store";

export default function PerformanceChart() {
  // const kind = store.get.USER_PERFORMANCE.kind;

  function customTick({ payload, x, y, textAnchor, stroke, radius }) {
    return (
      <g className="recharts-layer recharts-polar-angle-axis-tick">
        <text
          radius={radius}
          stroke={stroke}
          x={x}
          y={y}
          fill="white"
          className="recharts-text recharts-polar-angle-axis-tick-value"
          textAnchor={textAnchor}
        >
          <tspan x={x} dy="0.25em">
            {payload.value}
          </tspan>
        </text>
      </g>
    );
  }

  return (
    <div className="performanceChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={store.get.USER_PERFORMANCE.data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tick={customTick} />
          <Radar name="Mike" dataKey="value" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
