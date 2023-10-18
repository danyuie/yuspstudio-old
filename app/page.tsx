import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Whatwedo from "@/components/Whatwedo";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1324px] px-4">
      <Hero />
      {/* <Hero />
      <Services />
      <Work />
      <Whatwedo />
      <Subscribe /> */}
    </div>
  )
}
