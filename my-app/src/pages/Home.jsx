import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1>Select a skill</h1>
            <div className="grid">
                <div className="card" onClick={() => { navigate("/category/lifestyle") }}>
                    🧼 Lifestyle
                </div>
            </div>
            <div className="grid">
                <div className="card" onClick={() => { navigate("/category/social") }}>
                    🧠 Social
                </div>
            </div>
            <div className="grid">
                <div className="card" onClick={() => { navigate("/category/health") }}>
                    🦷 Health
                </div>
            </div>

        </div>
    );
}
