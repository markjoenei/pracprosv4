import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Stats } from "@/components/Stats";
import { Platform } from "@/components/Platform";
import { Benefits } from "@/components/Benefits";
import { Solutions } from "@/components/Solutions";
import { Stories } from "@/components/Stories";
import { Trust } from "@/components/Trust";
import { Resources } from "@/components/Resources";
import { Personas } from "@/components/Personas";
import { ContentMarketing } from "@/components/ContentMarketing";
import { Dashboard } from "@/components/Dashboard";
import { Automation } from "@/components/Automation";
import { Referral } from "@/components/Referral";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyPracpros } from "@/components/WhyPracpros";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Stats />
        <Platform />
        <Benefits />
        <Solutions />
        <Stories />
        <Trust />
        <Resources />
        <Personas />
        <ContentMarketing />
        <Dashboard />
        <Automation />
        <Referral />
        <HowItWorks />
        <WhyPracpros />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
