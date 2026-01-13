import lessons from "../data/lessons.json"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Lesson.css"

export default function Lesson() {

    const { type, id } = useParams();
    const navigate = useNavigate();

    // Load all images from assets directory
    const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg}', { eager: true });

    const getImagePath = (filename) => {
        if (!filename) return null;

        // 1. Try exact match in any subfolder
        for (const path in images) {
            if (path.endsWith(`/${filename}`)) {
                return images[path].default;
            }
        }

        // 2. Try match ignoring extension (fixes jpg vs png mismatch)
        const nameWithoutExt = filename.split('.')[0];
        for (const path in images) {
            // Check if path contains filename base as a distinct file name
            if (path.split('/').pop().startsWith(nameWithoutExt + '.')) {
                return images[path].default;
            }
        }

        return null;
    };

    // Safety check: handle if type is invalid or id not found
    const categoryLessons = lessons[type];
    const lesson = categoryLessons ? categoryLessons.find((l) => l.id === id) : null;

    const [step, setStep] = useState(0);

    if (!lesson) {
        return <div>Lesson not found</div>;
    }

    const current = lesson.steps[step];
    const imageSrc = getImagePath(current.image);

    // Text to Speech Function
    const speak = (text) => {
        // Cancel any current speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9; // Slightly slower for kids
        utterance.pitch = 1.1; // Friendly pitch

        // Optional: Find a friendly voice
        const voices = window.speechSynthesis.getVoices();
        // Try to find a female/friendly voice if available (browser dependent)
        const friendlyVoice = voices.find(v => v.name.includes("Female") || v.name.includes("Google US English"));
        if (friendlyVoice) utterance.voice = friendlyVoice;

        window.speechSynthesis.speak(utterance);
    };

    // Auto-speak when step changes (optional accessibility feature)
    // useEffect(() => { speak(current.text) }, [current]); 

    return (
        <div className="lesson-container">
            <div className="back-button-container" style={{ width: '100%', marginBottom: '1rem' }}>
                <button className="btn-back" onClick={() => navigate(`/category/${type}`)}>
                    ← Back
                </button>
            </div>

            <div className="lesson-progress">
                Step {step + 1} of {lesson.steps.length}
            </div>

            <div className="lesson-image-container">
                <img className="lesson-image" src={imageSrc} alt={current.text} />
            </div>

            <h2 className="lesson-text">{current.text}</h2>

            <div className="controls">
                <button
                    className="btn-control"
                    onClick={() => setStep(step - 1)}
                    disabled={step === 0}
                    aria-label="Previous step"
                >
                    ⬅
                </button>

                <button
                    className="btn-control btn-sound"
                    onClick={() => speak(current.text)}
                    aria-label="Play sound"
                >
                    🔊
                </button>

                <button
                    className="btn-control"
                    onClick={() => {
                        window.speechSynthesis.cancel(); // Stop speaking when leaving
                        if (step === lesson.steps.length - 1)
                            navigate("/reward");
                        else setStep(step + 1);
                    }}
                    aria-label="Next step"
                >
                    ➡
                </button>
            </div>
        </div>
    );
}