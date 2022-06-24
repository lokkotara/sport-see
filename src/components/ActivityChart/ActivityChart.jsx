import "./ActivityChart.scss";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { store } from "../../providers/Store";

export default function ActivityChart() {

  return (
        <div style={{ width: "100%" }}  className="activityChart">
          <h4> Activités </h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart width={50} height={80} data={store.get.USER_ACTIVITY.sessions} barSize={10}>
              <CartesianGrid strokeDasharray="1" />
              <XAxis />
              <YAxis />
              <Bar dataKey="kilogram" fill="black" />
              <Bar dataKey="calories" fill="red" />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
}