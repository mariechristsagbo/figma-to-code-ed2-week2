import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import Collection from "@/components/Collection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <Hero />
      <Discover />
      <Collection />
    </main>
  );
}
