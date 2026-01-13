import lessons from "../data/lessons.json"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Lesson() {

    const { type, id } = useParams();
    const navigate = useNavigate();
    const lesson = lessons[type].find((l) => l.id === id);
    const [step, setStep] = useState(0);
    const current = lesson.steps[step];

    return (
        <div className="lesson">
            <p>Step {step + 1} of {lessons.steps.length} </p>

            <img src={current.img} alt="" />
            <h2>{current.text}</h2>

            <div className="controls">
                <button onClick={() => setStep(step - 1)}
                    disabled={step === 0}>⬅</button>

                <button onClick={() => new Audio(`/voice/${id}_${step}.mp3`).play()}
                >🔊</button>

                <button onClick={() => {
                    if (step === lessons.steps.length - 1)
                        navigate("/reward");
                    else setStep(step + 1);
                }}>➡</button>
            </div>
        </div>
    );
}