import "./Home.scss";
import Chart from "../../components/Chart/Chart";

export default function Home() {


  return (
    <main className="home">
      <div className="homeContainer">
        <div className="containerHeading">
          <p>Bonjour <span>Thomas</span></p>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="chartsContainer">
          <Chart className="daily" name="daily"/>
          <Chart className="session" name="session"/>
          <Chart className="spiderWeb" name="spiderWeb"/>
          <Chart className="score" name="score"/>
        </div>
        <div className="asideContent"></div>
      </div>
    </main>
  )
}