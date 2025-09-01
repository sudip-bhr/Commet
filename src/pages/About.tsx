import { Star } from "lucide-react";

export default function About() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#170220] via-[#806B99] to-[#806B99]">

        {/* Star Field */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 35 }).map((_, i) => (
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


    </div>    

  );
}
