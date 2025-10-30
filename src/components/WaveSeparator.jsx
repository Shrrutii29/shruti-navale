export default function WaveSeparator({ flip = false, color = "#ffff" }) {
    return (
        <svg
            className={`absolute bottom-0 left-0 w-full ${flip ? "rotate-180" : ""}`}
            height="120"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
        >
            <path
                d="M0,40 C360,120 1080,-40 1440,40 V120 H0 Z"
                fill={color}
            />
        </svg>
    );
}