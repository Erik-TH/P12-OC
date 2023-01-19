import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserDatas, getUserActivityDatas, getUserAverageSessionsDatas, getUserPerformanceDatas } from "../services/getDatas";

import DailyActivity from "./DailyActivity"
import AverageSessionsDuration from "./AverageSessionsDuration";
import Performance from "./Performance";
import Score from "./Score";

import { UserDatas } from "../models/UserDatas";


export default function Dashboard() {
  let { id } = useParams();
  let { userswitch } = useParams();
  const token = localStorage.getItem("accessToken");
  const [getUserById, setgetUserById] = useState({});

  const [getUserActivityById, setgetUserActivityById] = useState({});
  const [getUserAverageSessionById, setgetUserAverageSessionById] = useState({});
  const [getUserPerformanceById, setgetUserPerformanceById] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async (id, userswitch) => {
      const USER = await getUserDatas(id, userswitch);
      const ACTIVITY = await getUserActivityDatas(id, userswitch);
      const AVERAGE_SESSIONS = await getUserAverageSessionsDatas(id, userswitch);
      const PERFORMANCE = await getUserPerformanceDatas(id, userswitch);

      setgetUserById(USER);
      setgetUserActivityById(ACTIVITY);
      setgetUserAverageSessionById(AVERAGE_SESSIONS);
      setgetUserPerformanceById(PERFORMANCE);

      setIsLoading(false);
    };
    fetch(id, userswitch);
  }, [id, userswitch]);

  const USER_CLASS = !isLoading
    ? new UserDatas(
        getUserById?.userInfos.firstName,
        getUserById?.userInfos.lastName,
        getUserById?.userInfos.age,
        getUserById?.score ? getUserById.score : getUserById.todayScore,
        getUserById?.keyData.calorieCount,
        getUserById?.keyData.proteinCount,
        getUserById?.keyData.carbohydrateCount,
        getUserById?.keyData.lipidCount
      )
    : "";

  return (
    <>
      {isLoading && token === id ? (
        <p>Loading datas</p>
      ) : (
        <>
          <section className="dashboard">
            <h2 className="dashboard__welcomeTitle">
              Bonjour{" "}
              <span className="dashboard__welcomeTitle--userFirstname">
              {USER_CLASS.firstName}
              </span>
            </h2>

            <p className="dashboard__message">
              Félicitation ! Vous avez explosé vos objectifs hier
            </p>

            <div className="dashboard__stats">
              <div className="statsCards">
                <DailyActivity userActivityData={getUserActivityById} />
                <AverageSessionsDuration averageSessionsData={getUserAverageSessionById} />
                {/* <article className="statsCards__item averageTimeSession"></article> */}
                <Performance performanceDatas={getUserPerformanceById} />
                {/* <article className="statsCards__item performance"></article> */}
                <Score userScoreDatas={USER_CLASS.arrayOfPercentScore} />
                {/* <article className="statsCards__item score"></article> */}
              </div>

              <aside className="statsSummary">
                <article className="statsSummary__item calories"></article>
                <article className="statsSummary__item proteines"></article>
                <article className="statsSummary__item glucides"></article>
                <article className="statsSummary__item lipides"></article>
              </aside>
            </div>
          </section>
        </>
      )}
    </>
  );
}
