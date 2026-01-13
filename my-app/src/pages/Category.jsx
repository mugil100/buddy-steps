import lessons from "../data/lessons.json"
import { useParams, useNavigate } from "react-router-dom"
import "./Category.css"

export default function Category() {
    const { type } = useParams();
    const navigate = useNavigate();

    return (
        <div className="category-container">
            <div className="back-button-container">
                <button className="btn-back" onClick={() => navigate("/")}>
                    ← Back to Home
                </button>
            </div>

            <h1 className="category-header">{type} Skills</h1>

            <div className="lesson-grid">
                {lessons[type].map((lesson) => (
                    <div className="lesson-card"
                        key={lesson.id}
                        onClick={() => navigate(`/lesson/${type}/${lesson.id}`)}>
                        <span>{lesson.title}</span>
                        <span>▶</span>
                    </div>
                ))}
            </div>
        </div>
    );
}