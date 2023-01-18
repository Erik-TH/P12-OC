import axios from "axios";
import * as MOCKED_DATA from "../__mocks__/data"

// async function getUser(id) {
//   try {
//     const response = await axios.get(`http://localhost:3000/user/${id}`);
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function getActivity(id) {
//   try {
//     const response = await axios.get(
//       `http://localhost:3000/user/${id}/activity`
//     );
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function getAverageSessions(id) {
//   try {
//     const response = await axios.get(
//       `http://localhost:3000/user/${id}/average-sessions`
//     );
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function getPerformance(id) {
//   try {
//     const response = await axios.get(
//       `http://localhost:3000/user/${id}/performance`
//     );
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export { getUser, getActivity, getAverageSessions, getPerformance };


export default async function getDatas(id, userswitch, uri) {
    if (userswitch === "user") {
        try {
            const response = await axios.get(
                `http:localhost:3000/${userswitch}/${id}/${uri}`
                )
                // console.log(response.data.data);
                return response.data.data
        } catch (error) {
            console.error(error)
        }
    } else if(userswitch === "mocked") {
        // console.log(USER_DATA.USER_MAIN_DATA);
        switch (uri) {
            case "":
                const MOCKED_USER = MOCKED_DATA.USER_MAIN_DATA.find(
                    (user) => user.id === parseInt(id)
                )
                return MOCKED_USER

            case "activity":
                const MOCKED_USER_ACTIVITY = MOCKED_DATA.USER_ACTIVITY.find(
                    (user) => user.id === parseInt(id)
                )
                return MOCKED_USER_ACTIVITY

            case "average-session":
                const MOCKED_USER_AVERAGE_SESSIONS = MOCKED_DATA.USER_AVERAGE_SESSIONS.find(
                    (user) => user.id === parseInt(id)
                )
                return MOCKED_USER_AVERAGE_SESSIONS

            case "performance":
                const MOCKED_USER_PERFORMANCE = MOCKED_DATA.USER_PERFORMANCE.find(
                    (user) => user.id === parseInt(id)
                )
                return MOCKED_USER_PERFORMANCE

            default:
                break
        }
    }
}


export async function getUserDatas(id, userswitch) {
    return await getDatas(id, userswitch, "");
}

export async function getUserActivityDatas(id, userswitch) {
    return await getDatas(id, userswitch, "activity");
}

export async function getUserAverageSessionsDatas(id, userswitch) {
    return await getDatas(id, userswitch, "average-sessions");
}

export async function getUserPerformanceDatas(id, userswitch) {
    return await getDatas(id, userswitch, "performance");
}