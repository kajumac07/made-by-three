"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Smartphone,
  BarChart3,
  Check,
  Star,
  Award,
} from "lucide-react";

export default function ServicesPageComponent() {
  const [activeService, setActiveService] = useState("web");

  const services = {
    web: {
      title: "Web Development",
      icon: <Code className="text-blue-600" size={24} />,
      description:
        "We create high-performance, responsive websites and web applications that deliver exceptional user experiences and drive business growth.",
      features: [
        "React.js & Next.js Development",
        "Responsive Design",
        "SEO Optimization",
        "Node.js Backend",
        "MongoDB Database Solutions",
        "Firebase Integration",
        "Progressive Web Apps",
        "Performance Optimization",
      ],
      projects: 42,
      rating: 4.9,
    },
    app: {
      title: "App Development",
      icon: <Smartphone className="text-purple-600" size={24} />,
      description:
        "We build cross-platform and native mobile applications that provide seamless experiences on iOS and Android devices.",
      features: [
        "Flutter Cross-Platform Apps",
        "iOS Development with SwiftUI",
        "Android Development",
        "GetX State Management",
        "Firebase Integration",
        "Push Notifications",
        "App Store Deployment",
        "UI/UX Design",
      ],
      projects: 28,
      rating: 4.8,
    },
    marketing: {
      title: "Digital Marketing",
      icon: <BarChart3 className="text-indigo-600" size={24} />,
      description:
        "We develop data-driven marketing strategies that increase your online visibility, engage your audience, and drive conversions.",
      features: [
        "SEO & SEM Strategies",
        "Social Media Marketing",
        "Content Marketing",
        "Email Campaigns",
        "Google Analytics",
        "Conversion Optimization",
        "PPC Advertising",
        "Growth Strategy",
      ],
      projects: 35,
      rating: 4.7,
    },
  };

  type ServiceKey = keyof typeof services;
  const currentService = services[activeService as ServiceKey];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Our Services
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Solutions That <span className="text-blue-600">Drive</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Your Business Forward
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to your business
            needs, from web and app development to digital marketing strategies
            that deliver results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left content - Service selection */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Expertise
              </h2>

              <div className="space-y-4">
                <button
                  onClick={() => setActiveService("web")}
                  className={`w-full flex items-center p-4 rounded-xl text-left transition-all duration-300 ${
                    activeService === "web"
                      ? "bg-blue-50 border-2 border-blue-200 shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Code className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Web Development
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Modern, responsive websites
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveService("app")}
                  className={`w-full flex items-center p-4 rounded-xl text-left transition-all duration-300 ${
                    activeService === "app"
                      ? "bg-purple-50 border-2 border-purple-200 shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Smartphone className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      App Development
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      iOS, Android & cross-platform
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveService("marketing")}
                  className={`w-full flex items-center p-4 rounded-xl text-left transition-all duration-300 ${
                    activeService === "marketing"
                      ? "bg-indigo-50 border-2 border-indigo-200 shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <BarChart3 className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Digital Marketing
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Growth-driven strategies
                    </p>
                  </div>
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-lg mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">
                      150+ Happy Clients
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">
                      80+ Projects Completed
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">
                      4.9/5 Client Rating
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="group mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Right content - Service details */}
          <div className="lg:w-3/5">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-1">
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Featured Service
              </div>

              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  {currentService.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {currentService.title}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {currentService.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="flex items-center">
                    <Award className="text-blue-600 mr-2" size={20} />
                    <span className="text-2xl font-bold text-gray-900">
                      {currentService.projects}+
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Projects Completed
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="flex items-center">
                    <Star className="text-purple-600 mr-2" size={20} />
                    <span className="text-2xl font-bold text-gray-900">
                      {currentService.rating}/5
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Client Rating</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What We Offer
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentService.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <Check
                      className="text-green-500 mr-3 flex-shrink-0"
                      size={18}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Our Process
                </h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[140px] bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mb-2">
                      1
                    </div>
                    <p className="text-sm font-medium">Discovery & Planning</p>
                  </div>
                  <div className="flex-1 min-w-[140px] bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mb-2">
                      2
                    </div>
                    <p className="text-sm font-medium">Design & Development</p>
                  </div>
                  <div className="flex-1 min-w-[140px] bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mb-2">
                      3
                    </div>
                    <p className="text-sm font-medium">Testing & Refinement</p>
                  </div>
                  <div className="flex-1 min-w-[140px] bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mb-2">
                      4
                    </div>
                    <p className="text-sm font-medium">Launch & Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl transform -rotate-12 z-[-1]"></div>
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-purple-100 rounded-2xl transform rotate-6 z-[-1]"></div>

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

        {/* Additional Services Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Services We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our core services, we provide additional solutions to
              support your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                UI/UX Design
              </h3>
              <p className="text-gray-600 mb-4">
                Creating intuitive and engaging user experiences that convert
                visitors into customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-500 mr-2" size={16} />
                  User Research
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-500 mr-2" size={16} />
                  Wireframing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-500 mr-2" size={16} />
                  Prototyping
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                E-commerce Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Building online stores with seamless shopping experiences and
                secure payment processing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-500 mr-2" size={16} />
                  Shopping Cart Systems
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-500 mr-2" size={16} />
                  Payment Integration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-500 mr-2" size={16} />
                  Inventory Management
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Content Strategy
              </h3>
              <p className="text-gray-600 mb-4">
                Developing compelling content that resonates with your audience
                and drives engagement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-500 mr-2" size={16} />
                  Content Planning
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-500 mr-2" size={16} />
                  Blog & Article Writing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="text-green-500 mr-2" size={16} />
                  SEO Content Optimization
                </li>
              </ul>
            </div>
          </div>
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
