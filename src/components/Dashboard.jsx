import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserDatas, getUserActivityDatas, getUserAverageSessionsDatas, getUserPerformanceDatas } from "../services/getDatas";

import { UserDatas } from "../models/UserDatas";

export default function Dashboard() {
  let { id } = useParams();
  let { userswitch } = useParams();
  const token = localStorage.getItem("accessToken");
  const [getUserById, setgetUserById] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async (id, userswitch) => {
      const USER = await getUserDatas(id, userswitch);

      setgetUserById(USER);
      setIsLoading(false);
    };
    fetch(id, userswitch);
  }, [id, userswitch]);

  const USER_CLASS = !isLoading
    ? new UserDatas(
        getUserById?.userInfos.firstName,
      )
    : "";

  return (
    <>
      {isLoading && token === id ? (
        <p>Loading datas</p>
      ) : (
        <>
          <section className="dashboard">
            <h1 className="dashboard__welcomeTitle">
              Bonjour{" "}
              <span className="dashboard__welcomeTitle--userFirstname">
              {USER_CLASS.firstName}
              </span>
            </h1>

            <p className="dashboard__message">
              Félicitation ! Vous avez explosé vos objectifs hier
            </p>

            <div className="stats">
              <div className="statsLeftColumn">
                <article className="statsCard dailyActivity"></article>
                <article className="statsCard averageTimeSession"></article>
                <article className="statsCard performance"></article>
                <article className="statsCard score"></article>
              </div>

              <div className="statsRightColumn">
                <article className="statsCard statsCardRight"></article>
                <article className="statsCard statsCardRight"></article>
                <article className="statsCard statsCardRight"></article>
                <article className="statsCard statsCardRight"></article>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
