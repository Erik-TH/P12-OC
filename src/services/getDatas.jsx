import axios from "axios";
import * as MOCKED_DATA from "../__mocks__/data"

/**
 * @description function to fetch the datas from either the API or the local mocked user
 * @param { number } id The id of the user
 * @param { string } userswitch Either "user" to get the datas from the API or "mocked"
 * @param { string } uri Ressource id : activity or average-sessions or performance
 * @returns 
 */
export default async function getDatas(id, userswitch, uri) {
    if (userswitch === "user") {
        try {
            const response = await axios.get(
                `http://localhost:3000/${userswitch}/${id}/${uri}`
                )
                // console.log(response.data.data);
                return response.data.data
        } catch (error) {
            console.error(error)
        }
    } else if (userswitch === "mocked") {
        // console.log(USER_DATA.USER_MAIN_DATA);
        switch (uri) {
            case "":
                const MOCKED_USER = MOCKED_DATA.USER_MAIN_DATA.find(
                    (user) => user.id === parseInt(id)
                )
                return MOCKED_USER

            case "activity":
                const MOCKED_USER_ACTIVITY = MOCKED_DATA.USER_ACTIVITY.find(
                    (user) => user.userId === parseInt(id)
                )
                return MOCKED_USER_ACTIVITY

            case "average-sessions":
                const MOCKED_USER_AVERAGE_SESSIONS = MOCKED_DATA.USER_AVERAGE_SESSIONS.find(
                    (user) => user.userId === parseInt(id)
                )
                return MOCKED_USER_AVERAGE_SESSIONS

            case "performance":
                const MOCKED_USER_PERFORMANCE = MOCKED_DATA.USER_PERFORMANCE.find(
                    (user) => user.userId === parseInt(id)
                )
                return MOCKED_USER_PERFORMANCE

            default:
                break
        }
    }
}

/**
 * @description Retrieves information from a user - includes the user id, user information (firstname, lastname and age), the current day's score(todayScore | score) and key datas(calorieCount, proteinCount, etc.)
 * @param { number } id The user's id
 * @param { string } userswitch Either "user" to get the datas from the API or "mocked"
 * @returns Object
 */
export async function getUserDatas(id, userswitch) {
    return await getDatas(id, userswitch, "");
}

/**
 * @description Retrieves a user's activity day by day with kilograms and calories
 * @param { number } id The user's id
 * @param { string } userswitch Either "user" to get the datas from the API or "mocked"
 * @returns Object
 */
export async function getUserActivityDatas(id, userswitch) {
    return await getDatas(id, userswitch, "activity");
}

/**
 * @description Retrieves the average sessions of a user per day. The week starts on Monday.
 * @param { number } id The user's id
 * @param { string } userswitch Either "user" to get the datas from the API or "mocked"
 * @returns Object
 */
export async function getUserAverageSessionsDatas(id, userswitch) {
    return await getDatas(id, userswitch, "average-sessions");
}

/**
 * @description Retrieves a user's performance (energy, endurance, etc.).
 * @param { number } id The user's id
 * @param { string } userswitch Either "user" to get the datas from the API or "mocked"
 * @returns Object
 */
export async function getUserPerformanceDatas(id, userswitch) {
    return await getDatas(id, userswitch, "performance");
}