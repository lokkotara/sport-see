import "./Home.scss";
import { StoreContext } from "../../providers/Store";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserActivity, getUserInfos, getUserPerformance, getUserSessions } from "../../services/actions";
import  ActivityChart  from "../../components/ActivityChart/ActivityChart";
import SessionChart from "../../components/SessionChart/SessionChart";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";

export default function Home() {

  const {id} = useParams();
  const store =  React.useContext(StoreContext)[0];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllDatas = async function(id){
      await getUserSessions(id);
      await getUserActivity(id);
      await getUserInfos(id);
      await getUserPerformance(id);
      setIsLoading(false);
    } 
  getAllDatas(id);
  }, [id]);

  function showCharts() {
    return (
      <div className="chartsContainer">
        <ActivityChart />
        <SessionChart />
        <ScoreChart />
        <PerformanceChart />
      </div>
    );
  }

  function showHeader() {
    return (
      <div className="containerHeading">
        <p>Bonjour<span> {store.USER_MAIN_DATA.userInfos.firstName}</span></p>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    );
  }

  function showLoading() {
    return (
      <div className="spinnerContainer">
        <div className="loadingSpinner"></div>
      </div>
    );
  }

  function showContent() {
    return (
      <React.Fragment>
        {showHeader()}
        {showCharts()}
      </React.Fragment>
    );
  }

  return (
    <main className="home">
      <div className="homeContainer">
        { isLoading ? showLoading() : showContent()}
        <div className="asideContent"></div>
      </div>
    </main>
  );
}