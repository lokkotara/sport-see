import "./ActivityChart.scss";
import PropTypes from "prop-types";
import React from "react";
import { store } from "../../providers/Store";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  Rectangle,
} from "recharts";

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-line">
        <span className="desc">{payload[0].value + "kg"}</span>
        <span className="desc">{payload[1].value + "Kcal"}</span>
      </div>
    );
  }
  return null;
};

const CustomCursor = (props) => {
  const { x, y, width, height } = props;
  return (
    <Rectangle
      fill="rgba(0,0,0,0.15)"
      strokeWidth={15}
      x={x}
      y={y}
      width={width / 2}
      height={height}
      transform="translate(28)"
    />
  );
};

export default function ActivityChart() {
  const formatXAxis = (i) => i + 1;

  return (
    <div style={{ width: "100%", height: "100%" }} className="activityChart">
      <span className="activityTitle">Activité quotidienne</span>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={store.get.USER_ACTIVITY.sessions}
          margin={{ top: 65, right: 30, bottom: 10, left: -20 }}
          barGap={8}
          width={50}
          height={50}
        >
          <CartesianGrid strokeDasharray="1 2" stroke="#ccc" vertical={false} />
          <XAxis
            tickLine={false}
            domain={["dataMin", "dataMax"]}
            tickMargin={15}
            tick={{ stroke: "#9B9EAC" }}
            tickFormatter={formatXAxis}
            interval={0}
            padding={{ left: -45, right: -45 }}
            fontSize={12}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickMargin={40}
            tickCount={3}
            tickLine={false}
            tick={{ stroke: "#9B9EAC" }}
            domain={["dataMin -1", "dataMax +2"]}
            axisLine={false}
            dataKey="kilogram"
            fontSize={12}
          />
          <YAxis
            tickCount={6}
            domain={[0, "dataMax +50"]}
            dataKey="calories"
            axisLine={false}
            tickLine={false}
            tick={false}
            yAxisId="left"
          />
          <Bar
            yAxisId="right"
            name="Poids (kg)"
            dataKey="kilogram"
            radius={[10, 10, 0, 0]}
            barSize={7}
            fill="#282D30"
          />
          <Bar
            yAxisId="left"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            radius={[10, 10, 0, 0]}
            barSize={7}
            fill="#E60000"
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ top: 0, right: 16 }}
          />
          <Tooltip
            label={store.get.USER_ACTIVITY.sessions}
            cursor={<CustomCursor />}
            wrapperStyle={{ top: -40 }}
            labelStyle={{ backgroundColor: "green" }}
            content={<CustomToolTip active={undefined} payload={undefined} />}
            offset={35}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

CustomCursor.propTypes = {
  props: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

// ActivityChart.propTypes = {
//   sessions: PropTypes.shape({
//       day: PropTypes.string.isRequired,
//       kilogram: PropTypes.number.isRequired,
//       calories: PropTypes.number.isRequired,
//     }),
//   formatXAxis: PropTypes.func,
// };
