import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo + link */}
        <div className="flex items-center gap-8">
          <div className="h-10 w-14 rounded-md bg-white/90 text-black grid place-items-center text-sm font-semibold">
            <Link to="/">
            LOGO
            </Link>
          </div>
          <a
            href="/about"
            className="text-white/90 hover:text-white font-semibold transition-colors"
          >
            About
          </a>
        </div>

        {/* Login — pill outline like the design */}
        <Link to="/login">
        <Button
          variant="ghost"
          className="
            h-10 px-7 rounded-full
            bg-transparent text-white
            border-2 border-white/90
            backdrop-blur-sm
            hover:bg-white hover:text-black
            transition-colors duration-200
            shadow-[0_0_18px_rgba(255,255,255,0.15)]
            focus-visible:ring-0
          "
        >
          Login
        </Button>
        </Link>
      </div>
    </nav>
  );
}

