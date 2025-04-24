import { Contact } from "@/components/Contact";
import { Designs } from "../components/Designs";
import { Hero } from "@/components/Hero";
import { KeyMetrics } from "@/components/KeyMetrics";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
import { SubPortfolio } from '@/components/SubPortfolio';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
        <LogoAnimation/>
        <Navbar/>
        <Hero/>
        <Stack/>
        <Portfolio/>
        <SubPortfolio/>
        <Designs/>
        <KeyMetrics/>
        <Services/>
        <Contact/>
    </main>  
  );
}