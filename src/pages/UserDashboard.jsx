import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserDatas, getUserActivityDatas, getUserAverageSessionsDatas, getUserPerformanceDatas } from "../services/getDatas";


export default function UserDashboard() {
    let { id } = useParams();
    let { userswitch } = useParams();
    const [getUserById, setgetUserById] = useState({});

    useEffect(() => {
      const fetch = async (id, userswitch) => {
        const USER = await getUserDatas(id, userswitch);
        setgetUserById(USER);
      };
      fetch(id, userswitch);
    }, [id, userswitch]);
    console.log(getUserById);

  return (
    <h3>User info:</h3>

  );

}