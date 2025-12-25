import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CategoryGrid from "@/components/CategoryGrid";
import Advantages from "@/components/Advantages";
import AboutPreview from "@/components/AboutPreview";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProcessTimeline from "@/components/ProcessTimeline";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import ShippingAreas from "@/components/ShippingAreas";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CategoryGrid />
      <Advantages />
      <AboutPreview />
      <FeaturedProducts />
      <ProcessTimeline />
      <GalleryPreview />
      <Testimonials />
      <ShippingAreas />
      <FAQ limit={5} />
      <CTA />
    </>
  );
}
