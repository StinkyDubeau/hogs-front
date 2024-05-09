import { useState, useRef, useEffect } from "react";
import "../App.css";

export default function FadeInSection(props) {
    const [isVisible, setVisible] = useState(true);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        observer.observe(ref.current);
        return () => observer.unobserve(ref.current);
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={ref}
        >
            {props.children}
        </div>
    );
}
