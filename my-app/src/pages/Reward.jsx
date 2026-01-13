import React from "react";
import { useNavigate } from "react-router-dom";
import "./Reward.css";

export default function Reward() {
    const navigate = useNavigate();

    return (
        <div className="reward-container">
            <h1 className="reward-title">Great job kid! 🌟</h1>
            <div className="reward-stars">⭐⭐⭐</div>
            <button className="btn-home" onClick={() => navigate("/")}>
                Go Home
            </button>
        </div>
    );
}