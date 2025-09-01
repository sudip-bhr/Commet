import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function LandingBody() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-r from-[#170220] to-[#4A0686] relative overflow-hidden">
      {/* Star Field */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <Star
            key={i}
            className="absolute text-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
          CONSISTENCY THROUGH <br /> CONNECTION
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-8">
          Track, Collaborate, Grow together
        </p>
        <Button className="mt-15 px-15 py-8 text-lg rounded-full bg-purple-800 hover:bg-indigo-800 shadow-lg">
          GET STARTED
        </Button>
      </div>
    </section>
  );
}


