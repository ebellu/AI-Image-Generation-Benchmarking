import { Header } from "@/components/Header";
import { Overview } from "@/sections/Overview";
import { Evaluation } from "@/sections/Evaluation";
import { Recommendations } from "@/sections/Recommendations";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <Overview />
        <Evaluation />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
}
