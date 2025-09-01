// pages/HomePage.tsx
import LandingBody from "./LandingBody";
import FeaturesSection from "./FeaturesSection";
import About from "./About";
import LastPage from "./LastPage";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="snap-start"><LandingBody /></section>
      <section className="snap-start"><FeaturesSection /></section>
      <section className="snap-start"><About /></section>
      <section className="snap-start min-h-screen"><LastPage />
      <Footer></Footer>
      </section>
    </div>
  );
}
