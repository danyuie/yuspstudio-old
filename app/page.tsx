import Hero from "@/components/Hero";
import Work from "@/components/Work";

// max-w-[1864px]
export default function Home() {
  return (
    <div className="relative">
      
      <div className="mx-auto">
        <Hero />
        <Work />
      </div>
    </div>
  )
}
