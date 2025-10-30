import WaveSeparator from "../components/WaveSeparator";
import HeroLanding from "../components/HeroLanding";
import JourneyMap from "../components/JourneyMap";

export default function Home() {
    return (
        <>
            {/* SECTION 1 */}
            <section className="relative">
                <HeroLanding />
                <WaveSeparator />
            </section>

            {/* SECTION 2 */}
            <section className="relative pb-[55px]">
                <JourneyMap src="/journeymap.png" />
                <WaveSeparator color="#111" />
            </section>
        </>
    );
}
