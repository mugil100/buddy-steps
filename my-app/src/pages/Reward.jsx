import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import "./Reward.css";

export default function Reward() {
    const navigate = useNavigate();

    useEffect(() => {
        // Gentle Rain Effect
        const interval = setInterval(() => {
            confetti({
                particleCount: 10, // Very few per tick for calmness
                angle: 270, // Straight down
                spread: 50, // Slight variation
                origin: { x: Math.random(), y: -0.1 }, // Random position above top
                colors: ['#A8E6CF', '#FFD3B6', '#DCC6E0', '#ACE5EE'],
                gravity: 0.5, // Slow fall
                scalar: 2.5, // Big soft shapes
                ticks: 400, // Lasts longer on screen
                startVelocity: 15,
                shapes: ['circle'], // Soft shapes only
                disableForReducedMotion: true
            });
        }, 200); // Frequent gentle drops

        return () => clearInterval(interval);
    }, []);

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