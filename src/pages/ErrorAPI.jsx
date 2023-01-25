import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorAPI() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Request made but no response is received from the server.</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
}
