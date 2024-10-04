// Page and 'Route' are reserved Keywords
// page.tsx / page.jsx are used to create Client Route   -->> like http://localhost:3000/folder where folder is the Client Route
// route.tsx / route.jsx are used to create API Route  -->> {"foo": "bar"} API inside the 'localhost:3000//folder' pager

import { currentUser } from "@clerk/nextjs/server";

import { products } from "@/app/api/landing-page-data";
import Navbar from "@/components/landing-page/ui/navbar";
import TitleTheme from "@/components/landing-page/components/TitleTheme";
import { HeroParallax } from "@/components/landing-page/ui/hero-parallax";
import Technologies from "@/components/landing-page/components/Technologies";
import { FeaturesSection } from "@/components/landing-page/components/Features";
import Feedback from "@/components/landing-page/components/Feedback";
import Footer from "@/components/landing-page/components/Footer";

export default async function LandingPage() {
  const user = await currentUser();

  return (
    <>
        <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <Navbar />
                <TitleTheme />
                {/* <HeroParallax products={products} /> */}
                <Technologies />
                <FeaturesSection />
                <Feedback />
                <Footer />
            </div>
        </main>
    </>
  );
}
