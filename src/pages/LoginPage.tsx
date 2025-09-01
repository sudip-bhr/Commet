import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Orion from "/orion.svg";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0033] via-[#2b0057] to-[#4b0082] p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-transparent max-w-5xl w-full">
        
        {/* Left side alien */}
        <div className="flex flex-col items-center justify-center text-white space-y-6">
          <h1 className="text-3xl font-bold">Welcome Back !</h1>
          <img
            src={Orion}
            alt="Alien mascot"
            className="w-72 h-auto drop-shadow-2xl"
          />
        </div>

        {/* Right side login card */}
        <Card className="rounded-2xl shadow-xl bg-gradient-to-b from-[#2d0052] to-[#1a0033] text-white p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Username */}
            <div>
              <label className="block mb-1 text-sm">Username</label>
              <Input
                placeholder="Enter your username"
                className="bg-transparent border-gray-500 text-white rounded-full"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent border-gray-500 text-white rounded-full"
              />
              <div className="flex justify-between items-center text-xs mt-1">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-purple-300 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Login button */}
            <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-700">
              Login
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-2 my-4">
              <div className="flex-grow h-px bg-gray-600"></div>
              <span className="text-gray-400 text-sm">Or</span>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>

            {/* Social login */}
            <div className="flex justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white text-black"
              >
                <FcGoogle size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-blue-600 text-white"
              >
                <FaFacebookF size={18} />
              </Button>
            </div>

            {/* Signup link */}
            <p className="text-center text-sm text-gray-400 mt-4">
              Don’t have an account?{" "}
              <Link to="/signup">
              <a className="text-purple-300 hover:underline">
                Sign Up
              </a></Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
