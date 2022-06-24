import "./SessionChart.scss";
import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { store } from "../../providers/Store";

export default function SessionChart() {
  return (
    <div style={{ width: "100%" }} className="sessionChart">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          width={500}
          height={200}
          data={store.get.USER_AVERAGE_SESSIONS}
          syncId="anyId"
          margin={{
            top: 50,
            right: 5,
            left: 5,
            bottom: -10,
          }}
        >
          <XAxis dataKey="day" axisLine={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            fill="white"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
