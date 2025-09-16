"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Star, Award, Users } from "lucide-react";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Three skills, one vision
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              We Transform <span className="text-blue-600">Ideas</span> Into
              <span className="relative">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Digital Excellence
                </span>
                <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-1"></div>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              MadeByThree combines expert web development, stunning design, and
              strategic marketing to create digital solutions that drive your
              business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300">
                <Play size={20} className="text-blue-600" fill="currentColor" />
                Watch Showreel
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-md">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <Users className="text-blue-600 mr-2" size={20} />
                  <span className="text-2xl font-bold text-gray-900">150+</span>
                </div>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <Award className="text-purple-600 mr-2" size={20} />
                  <span className="text-2xl font-bold text-gray-900">80+</span>
                </div>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>

              <div className="text-center lg:text-left col-span-2 md:col-span-1">
                <div className="flex items-center justify-center lg:justify-start">
                  <Star className="text-indigo-600 mr-2" size={20} />
                  <span className="text-2xl font-bold text-gray-900">
                    4.9/5
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Client Rating</p>
              </div>
            </div>
          </div>

          {/* Right content - visual element */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3">
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Featured Work
                </div>

                <div className="mb-4 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl overflow-hidden">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">
                        Project Showcase
                      </div>
                      <div className="text-sm">Modern Web Solution</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900">
                    E-commerce Platform
                  </h3>
                  <span className="text-sm text-blue-600 font-semibold">
                    Web Dev + Design
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  A fully responsive e-commerce solution with seamless checkout
                  and modern UI.
                </p>

                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                    MongoDB
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl transform -rotate-12 z-[-1]"></div>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-purple-100 rounded-2xl transform rotate-6 z-[-1]"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 left-10 bg-white p-3 rounded-lg shadow-lg flex items-center">
              <div className="mr-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Star
                    className="text-green-600"
                    size={20}
                    fill="currentColor"
                  />
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold">Client Review</div>
                <div className="text-xs text-gray-500">
                  &quot;Exceeded expectations!&quot;
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -right-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="flex">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold -ml-2 first:ml-0 border-2 border-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-xs font-semibold mt-2">
                Team Collaboration
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
