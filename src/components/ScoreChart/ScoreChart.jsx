// @ts-nocheck
// import PropTypes from "prop-types";
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
    <div className="scoreChart chart">
      <div className="scoreChartTitle">Score</div>
      <div className="whiteCircle">
        <span className="scoreChartScore">
          <span className="scoreChartScoreValue">
            {store.get.USER_MAIN_DATA.todayScore}%
          </span> de votre objectif
        </span>
      </div>
      <ResponsiveContainer width={'99%'}>
        <RadialBarChart
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
            background={false}
            cornerRadius={10}
            minAngle={100}
            clockWise={true}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}