import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6" aria-hidden>
      <div className="h-px bg-white/[0.06]" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] font-sans text-zinc-200 antialiased">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <About />
        <Divider />
        <Contact />
      </main>
    </div>
  );
}
