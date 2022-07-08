import "./ScoreChart.scss";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { store } from "../../providers/Store";

export default function ScoreChart() {
  return (
    <div style={{ width: "100%" }} className="scoreChart">
      <div className="scoreChartTitle">Score</div>
      <div className="whiteCircle">
        <span className="scoreChartScore">
          <span className="scoreChartScoreValue">{store.get.USER_MAIN_DATA.todayScore}%</span> de votre objectif
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius={80}
          outerRadius={100}
          data={store.get.USER_MAIN_DATA.todayScoreDatas}
          startAngle={90}
          barSize={10}
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
            background= {false}
            cornerRadius={10}
            // @ts-ignore
            minAngle={100}
            clockWise={true}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
