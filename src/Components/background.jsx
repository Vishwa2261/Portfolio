
import React from "react";
import "../Styles/AnimatedBackground.css"

export default function AnimatedBackground() {
    return <div className="bubble-background">
        {Array.from({ length: 50 }).map((_, index) => (
            <div key={index} className="bubble" />
        ))}
    </div>
}
