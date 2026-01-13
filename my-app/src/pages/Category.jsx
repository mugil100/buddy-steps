import lessons from "../data/lessons.json"
import { useParams, useNavigate } from "react-router-dom"

export default function Category() {
    const { type } = useParams();
    const navigate = useNavigate();

    return (
        <div className="grid">
            {lessons[type].map((lesson) => (
                <div className="card"
                    key={lesson.id}
                    onClick={() => navigate(`/lesson/${type}/${lesson.id}`)}>
                    {lesson.title}
                </div>
            ))}
        </div>
    );

}