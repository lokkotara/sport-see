import "./Home.scss";
import ActivityChart from "../../components/ActivityChart/ActivityChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";
import React, { useEffect } from "react";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import SessionChart from "../../components/SessionChart/SessionChart";
import { Navigate, useParams } from "react-router-dom";
import { StoreContext } from "../../providers/Store";
import { getAllData } from "../../services/actions";

export default function Home() {
  const { id } = useParams();
  const store = React.useContext(StoreContext)[0];

  useEffect(() => {
    if (!store.isLoading && !store.USER_MAIN_DATA.todayScore) getAllData(id);
  }, [id, store]);

  if (store.error) return <Navigate to="/error" />;

  const showCharts = () => {
    return (
      <React.Fragment>
        <ActivityChart />
        <SessionChart />
        <ScoreChart />
        <PerformanceChart />
      </React.Fragment>
    );
  };

  const showHeader = () => {
    return (
      <div className="containerHeading">
        <p>
          Bonjour<span> {store.USER_MAIN_DATA.userInfos.firstName}</span>
        </p>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    );
  };

  const showLoading = () => {
    return (
      <div className="spinnerContainer">
        <div className="loadingSpinner"></div>
      </div>
    );
  };

  const showContent = () => {
    return (
      <React.Fragment>
        {showHeader()}
        {showCharts()}
      </React.Fragment>
    );
  };

  const showKeyDatas = () => {
    return (
      <React.Fragment>
        <article className="infosCardContainer">
          <div className="infosCardImgContainer caloriesImg">
            <img src="/images/icons/calories.svg" alt="" />
          </div>
          <div className="infosCardTxtContainer">
            <div className="infosCartTxtValue">
              {store.USER_MAIN_DATA.keyData.calorieCount}kCal
            </div>
            <div className="infosCardTxtCategory">Calories</div>
          </div>
        </article>
        <article className="infosCardContainer">
          <div className="infosCardImgContainer proteinsImg">
            <img src="/images/icons/proteins.svg" alt="" />
          </div>
          <div className="infosCardTxtContainer">
            <div className="infosCartTxtValue">
              {store.USER_MAIN_DATA.keyData.proteinCount}g
            </div>
            <div className="infosCardTxtCategory">Protéines</div>
          </div>
        </article>
        <article className="infosCardContainer">
          <div className="infosCardImgContainer carbsImg">
            <img src="/images/icons/carbs.svg" alt="" />
          </div>
          <div className="infosCardTxtContainer">
            <div className="infosCartTxtValue">
              {store.USER_MAIN_DATA.keyData.carbohydrateCount}g
            </div>
            <div className="infosCardTxtCategory">Glucides</div>
          </div>
        </article>
        <article className="infosCardContainer">
          <div className="infosCardImgContainer fatsImg">
            <img src="/images/icons/fats.svg" alt="" />
          </div>
          <div className="infosCardTxtContainer">
            <div className="infosCartTxtValue">
              {store.USER_MAIN_DATA.keyData.lipidCount}g
            </div>
            <div className="infosCardTxtCategory">Lipides</div>
          </div>
        </article>
      </React.Fragment>
    );
  };

  return (
    <main className="home">
      <div className="homeContainer">
        {store.isLoading ? showLoading() : showContent()}
        <div className="asideContent">
          {store.isLoading ? "" : showKeyDatas()}
        </div>
      </div>
    </main>
  );
}