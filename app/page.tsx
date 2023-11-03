import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// max-w-[1864px]
export default function Home() {
  return (
    <Providers>
      <Navbar />
        <main className='relative overflow-hidden '>
          <Hero />
          <Work />
        </main>
      <Footer />
  </Providers>
  )
}
