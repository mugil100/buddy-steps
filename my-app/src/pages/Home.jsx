import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Hello, tiny superhero! 🦸‍♂️</h1>
            <h1 className="home-title">✨ What do you want to learn? ✨</h1>
            <div className="category-grid">
                <div
                    className="category-card card-lifestyle"
                    onClick={() => navigate("/category/lifestyle")}
                >
                    <span style={{ fontSize: '3rem' }}>🧼</span>
                    Lifestyle
                </div>

                <div
                    className="category-card card-social"
                    onClick={() => navigate("/category/social")}
                >
                    <span style={{ fontSize: '3rem' }}>🧠</span>
                    Social
                </div>

                <div
                    className="category-card card-health"
                    onClick={() => navigate("/category/health")}
                >
                    <span style={{ fontSize: '3rem' }}>🦷</span>
                    Health
                </div>
            </div>
        </div>
    );
}
