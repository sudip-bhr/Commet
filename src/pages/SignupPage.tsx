import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import Orion from "/orion.svg";
export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0033] via-[#2d0b52] to-[#4b0082] relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main container */}
      <div className="relative z-10 flex w-[90%] max-w-5xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden">
        {/* Left Side - Sign Up form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>

          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your username"
              className="rounded-full bg-transparent border border-white/40 text-white placeholder-white/70"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full bg-transparent border border-white/40 text-white placeholder-white/70"
            />
            <Input
              type="password"
              placeholder="Enter your password"
              className="rounded-full bg-transparent border border-white/40 text-white placeholder-white/70"
            />

            <Button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white">
              Sign Up
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-white/30"></div>
            <span className="px-2 text-white/70">Or</span>
            <div className="flex-grow border-t border-white/30"></div>
          </div>

          {/* Social login */}
          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white text-black"
            >
              <FcGoogle size={20} /> {/* Google */}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-blue-600 text-white"
            >
              <FaFacebookF size={20} />
            </Button>
          </div>

          {/* Already have account */}
          <p className="text-white/70 text-sm mt-6 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-pink-400 hover:underline">
              Login
            </a>
          </p>
        </div>

        {/* Right Side - Alien SVG + Heading */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-[#2d0b52]/60 to-[#1a0033]/60">
          <h2 className="text-2xl font-bold text-white mb-6">
            JOIN OUR COMMUNITY !
          </h2>
          <img src={Orion} alt="Alien mascot" className="w-72 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
