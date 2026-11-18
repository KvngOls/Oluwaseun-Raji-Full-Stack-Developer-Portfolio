import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-white">
        {/* Hero Brush Artwork */}
        <img
          src="/images/hero-brush.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-0 w-full"
        />

        {/* Left Brush Artwork */}
        <img
          src="/images/group-89.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-90 z-0 hidden w-87.5 md:block"
        />

        {/* Page Sections */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Works />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
