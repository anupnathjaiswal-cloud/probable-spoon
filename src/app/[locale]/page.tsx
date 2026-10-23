import About from "@/src/components/home/About";
import Capabilities from "@/src/components/home/Capabilities";
import Hero from "@/src/components/home/Hero";
import Projects from "@/src/components/home/Projects";
import Services from "@/src/components/home/Services";

export default function HomePage() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Capabilities />
        </main>
    );
}
