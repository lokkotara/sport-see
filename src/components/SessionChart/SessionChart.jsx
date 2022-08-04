import "./SessionChart.scss";
import PropTypes from "prop-types";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import { store } from "../../providers/Store";

/**
 * @typedef {import ("../../interfaces/interface").ToolTipContentProps} ToolTipContentProps
 * @typedef {import ("../../interfaces/interface").CustomCursorProps} CustomCursorProps
 * @typedef {import ("../../interfaces/interface").CustomDotProps} CustomDotProps
 */

/** @param {ToolTipContentProps} props*/
const ToolTipContent = ({ payload, active }) => {
  if (payload && active) {
    return (
      <div className="tooltipContainer">
        <span className="tooltip">
          {payload[0].payload.sessionLength} {payload[0].unit}
        </span>
      </div>
    );
  }
  return null;
};

/** @param {CustomCursorProps} props*/
const CustomCursor = ({ width, height, points }) => {
  let formattedWidth;
  let x;
  if (width && points && height) {
    formattedWidth = width - (points[0].x - 15);
    x= points[0].x;
    height = height + 40;
  }
    return (
      <Rectangle
      x={x}
      y={0}
      width={formattedWidth}
      height={height}
      fill="black"
      opacity={0.1}
      />
      );
};

/** @param {CustomDotProps} props*/
const CustomDot = ({ cx, cy, stroke }) => {
  return (
    <g>
      <circle cx={cx} cy={cy} r={4} fill={stroke} />
      <circle cx={cx} cy={cy} r={8} fill="rgba(250,250,250,0.25)" />
    </g>
  );
};

export default function SessionChart() {
  return (
    <div className="sessionChart chart">
      <div className="sessionChartTitle">Durée moyenne des sessions</div>
      <ResponsiveContainer width={'99%'}>
        <LineChart
          data={store.get.USER_AVERAGE_SESSIONS}
          margin={{
            top: 0,
            right: 0,
            left: 4.5,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "white", opacity: 0.5 }}
            interval={0}
            padding={{ left: 5, right: 10 }}
            fontSize={12}
          />
          <YAxis hide={true} domain={["dataMin-20", "dataMax+50"]} />
          <Tooltip content={<ToolTipContent />} cursor={<CustomCursor />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="white"
            unit="min"
            strokeWidth={2}
            dot={false}
            activeDot={<CustomDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

ToolTipContent.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

CustomCursor.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  points: PropTypes.array,
};

CustomDot.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    stroke: PropTypes.string,
};