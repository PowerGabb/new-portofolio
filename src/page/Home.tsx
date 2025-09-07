import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50">
      <section id="home">
        <HomeHero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="experience">
        <Experience />
      </section>
      {/* <section id="testimonials">
        <Testimonials />
      </section> */}
      <Footer />
    </div>
  );
}
