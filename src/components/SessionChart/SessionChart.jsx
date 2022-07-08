import "./SessionChart.scss";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle
} from "recharts";
import { store } from "../../providers/Store";

function toolTipContent(props) {
  const { active, payload } = props;
  if (active) {
    return (
      <div className="tooltipContainer" >
        <span className="tooltip">
          {payload[0].payload.sessionLength} {payload[0].unit}
        </span>
      </div>
    );
  }
  return null;
}

const CustomCursor=(props)=> {
  const {width, height, points} = props;
  const formattedWidth = width-(points[0].x-15);
  return (
    <Rectangle
      x={points[0].x}
      y={0}
      width={formattedWidth}
      height={height+40}
      fill="black"
      opacity={0.1}
    />
  );
}

const CustomDot = (props)=> {
  const {cx, cy, stroke} = props;
  return (
    <g>
      <circle cx={cx} cy={cy} r={4} fill={stroke} />
      <circle cx={cx} cy={cy} r={8} fill="rgba(250,250,250,0.25)" /> 
    </g>
  );
}

export default function SessionChart() {
  return (
    <div style={{ width: "100%", height: "100%" }} className="sessionChart">
      <div className="sessionChartTitle">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%">
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
            tick={{ fill: "white" , opacity: 0.5}}
            interval={0}
            padding={{ left: 5, right: 10 }}
            fontSize={12}
          />
          <YAxis
            hide={true}
            domain={["dataMin-20", "dataMax+50"]}
          />
          <Tooltip
            content={toolTipContent}
            cursor={<CustomCursor/>}
          />
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
