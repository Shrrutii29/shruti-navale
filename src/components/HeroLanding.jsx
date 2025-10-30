import { useState } from "react";

const premiumColors = [
    "#E4D7FF", // Lavender Milk
    "#FFC8DD", // Rosé Cloud
    "#FFDF8E", // Gold Mist
    "#BDE0FE", // Powder Blue
    "#CFFDE1", // Matcha Mist
    "#F9D8C8", // Peach Dust
];

export default function HeroLanding() {
    const [coloredMap, setColoredMap] = useState({});

    const handleHover = (lineKey, index) => {
        setColoredMap((prev) => {
            const newSet = new Set(prev[lineKey] || []);
            newSet.add(index);
            return { ...prev, [lineKey]: newSet };
        });

        setTimeout(() => {
            setColoredMap((prev) => {
                const newSet = new Set(prev[lineKey] || []);
                newSet.delete(index);
                return { ...prev, [lineKey]: newSet };
            });
        }, 4000);
    };

    const wrapChars = (text, lineKey, disableHover = false) =>
        text.split("").map((ch, i) => {
            if (ch === " ") return <span key={i} className="char-space"> </span>;

            if (disableHover) {
                return (
                    <span key={i} className="no-hover-char">
                        {ch}
                    </span>
                );
            }

            const color = premiumColors[i % premiumColors.length];
            const isColored = coloredMap[lineKey]?.has(i);

            return (
                <span
                    key={i}
                    onMouseEnter={() => handleHover(lineKey, i)}
                    className={`hover-char ${isColored ? "filled" : ""}`}
                    style={{ "--fill-color": color }}
                >
                    {ch}
                </span>
            );
        });

    return (
        <section className="relative w-screen h-screen bg-black flex items-center justify-start px-8 cursor-wait">
            <div className="w-[90%] max-w-[680px]">

                <h1 className="text-white text-2.5xl md:text-5xl font-semibold leading-tight">
                    {wrapChars("Hello, I'm ", "intro", false)}
                    {wrapChars("Shruti N. !", "intro-name", true)}
                </h1>

                <p className="text-neutral-400 text-2.5xl md:text-5xl font-semibold leading-tight mt-1">
                    {wrapChars("I build clean, meaningful", "tag1")}
                    <br />
                    {wrapChars("digital experiences", "tag2")}
                </p>

                <p className="text-neutral-400 text-2.5xl md:text-5xl font-semibold leading-tight mt-0.5">
                    {wrapChars("Software Engineer Intern", "role1")}
                    <br />
                    {wrapChars("at ", "role2")}
                    <span className="text-white">
                        {wrapChars("Hypersonix Inc.", "role-company", true)}
                    </span>
                </p>

            </div>

        </section>
    );
}
