import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import AnimationWrapper from "@/components/AnimationWrapper";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <AnimationWrapper>
      <main className="relative min-h-screen bg-black overflow-hidden selection:bg-indigo-500/90 selection:text-white">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        {/* Grid background for visual texture */}
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Ambient light effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 blur-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500 to-purple-500 opacity-10 blur-[100px]" />
        </div>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <div id="features">
            <Features />
          </div>
          <div id="pricing">
            <Pricing />
          </div>
        </div>

        {/* Floating elements in the background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -left-1/4 top-1/4 h-96 w-96 animate-blob rounded-full bg-purple-500/30 mix-blend-multiply blur-xl" />
          <div className="animation-delay-2000 absolute -right-1/4 top-1/2 h-96 w-96 animate-blob rounded-full bg-indigo-500/30 mix-blend-multiply blur-xl" />
          <div className="animation-delay-4000 absolute -bottom-1/4 left-1/2 h-96 w-96 animate-blob rounded-full bg-blue-500/30 mix-blend-multiply blur-xl" />
        </div>
      </main>
    </AnimationWrapper>
  );
}
