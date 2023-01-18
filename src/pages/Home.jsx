import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    
    const SetUserToken = (user, id) => {
        localStorage.removeItem("accessToken")
        localStorage.setItem("accessToken", id)
        navigate(`/${user}/${id}`);
    }

    return(
        <ul className="home__links">
        <li>
          <button
            className="home__links--link"
            onClick={() => {
              SetUserToken("user", 12);
            }}
          >
            API_user_12
          </button>
        </li>
  
        <li>
          <button
            className="home__links--link"
            onClick={() => {
              SetUserToken("user", 18);
            }}
          >
            API_user_18
          </button>
        </li>
  
        <li>
          <button
            className="home__links--link"
            onClick={() => {
              SetUserToken("mocked", 12);
            }}
          >
            MOCK_user_12
          </button>
        </li>
  
        <li>
          <button
            className="home__links--link"
            onClick={() => {
              SetUserToken("mocked", 18);
            }}
          >
            MOCK_user_18
          </button>
        </li>
      </ul>
    )
}