import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import Advantages from "@/components/Advantages";
import ProcessTimeline from "@/components/ProcessTimeline";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <Advantages />
      <ProcessTimeline />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
    </>
  );
}
