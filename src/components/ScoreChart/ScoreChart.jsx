import "./ScoreChart.scss";
import React, { useContext } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
  Tooltip,
} from "recharts";
import { store } from "../../providers/Store";

export default function ScoreChart() {

  return (
    <div style={{ width: "100%" }} className="scoreChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius={80}
          outerRadius={100}
          data={store.get.USER_MAIN_DATA.todayScore}
          startAngle={90}
          barSize={10}
          // @ts-ignore
          background={{ fill: "white" }}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="score"
            background
            // @ts-ignore
            minAngle={100}
            clockWise={true}
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
