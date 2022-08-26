import "./ScoreChart.scss";
import React from "react";
import PropTypes from "prop-types";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

/**
 * @typedef {import ("../../interfaces/interface").userInfosProps} userInfosProps
 */

/**
 * Allows you to create a radial chart with the data passed as a parameter
 * @param {userInfosProps} props An object containing the user's scores
 * @returns {JSX.Element} 
 */
export default function ScoreChart({ todayScore, todayScoreDatas }) {
  return (
    <div className="scoreChart chart">
      <div className="scoreChartTitle">Score</div>
      <div className="whiteCircle">
        <span className="scoreChartScore">
          <span className="scoreChartScoreValue">
            {todayScore}%
          </span> de votre objectif
        </span>
      </div>
      <ResponsiveContainer width={'99%'}>
        <RadialBarChart
          innerRadius={80}
          outerRadius={100}
          data={todayScoreDatas}
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
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

ScoreChart.propTypes = {
  todayScore: PropTypes.number.isRequired,
  todayScoreDatas: PropTypes.array.isRequired
}