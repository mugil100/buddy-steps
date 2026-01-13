import "./CalmModeToggle.css";

export default function CalmModeToggle() {
    return (
        <button
            className="calm-btn"
            onClick={() => document.body.classList.toggle("calm")}
        >
            🌿 Calm Mode
        </button>
    );
}
