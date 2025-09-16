"use client";

import { useState } from "react";
import { Code, Smartphone, TrendingUp, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("web");

  const services = {
    web: {
      title: "Web Development",
      description:
        "We create high-performance, scalable web applications with modern technologies that deliver exceptional user experiences.",
      icon: <Code className="w-8 h-8" />,
      features: [
        "React.js & Next.js Development",
        "Framer Motion Animations",
        "Node.js Backend Development",
        "MongoDB Database Solutions",
        "Firebase Integration",
        "Responsive Design",
        "SEO Optimization",
        "Progressive Web Apps",
      ],
      projects: "150+ Web Projects",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    app: {
      title: "App Development",
      description:
        "We build cross-platform and native mobile applications that provide seamless experiences on all devices.",
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        "Flutter Cross-Platform Apps",
        "GetX State Management",
        "Cloud Functions",
        "Firebase Integration",
        "Push Notifications",
        "iOS Development with SwiftUI",
        "Android Development",
        "App Store Deployment",
      ],
      projects: "80+ Mobile Apps",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    marketing: {
      title: "Digital Marketing",
      description:
        "We develop data-driven marketing strategies that increase your online visibility and drive growth.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "SEO & SEM Strategies",
        "Social Media Marketing",
        "Content Marketing",
        "Email Campaigns",
        "Google Analytics",
        "Conversion Optimization",
        "PPC Advertising",
        "Growth Marketing",
      ],
      projects: "200+ Marketing Campaigns",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
    },
  };

  const activeService = services[activeTab as keyof typeof services];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Three Pillars
            </span>{" "}
            of Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with creative vision to deliver
            comprehensive digital solutions that drive your business forward.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `text-white bg-gradient-to-r ${service.color} shadow-lg`
                  : "text-gray-700 bg-white hover:bg-gray-100 shadow-md"
              }`}
            >
              <span className="mr-2">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div
            className={`p-8 rounded-2xl ${activeService.bgColor} transition-all duration-500`}
          >
            <div className="flex items-center mb-6">
              <div
                className={`p-3 rounded-lg bg-gradient-to-r ${activeService.color} text-white mr-4`}
              >
                {activeService.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                {activeService.title}
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              {activeService.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {activeService.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`p-1 rounded-full bg-gradient-to-r ${activeService.color} mr-3`}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center text-gray-700 font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                {activeService.projects} Delivered
              </div>

              <button className="group flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300 mt-4 sm:mt-0">
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl shadow-xl p-6 transform rotate-2">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                Featured Project
              </div>

              <div className="mb-6 h-48 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="text-3xl font-bold mb-2">
                    {activeService.title} Demo
                  </div>
                  <div className="text-sm opacity-80">Interactive Preview</div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-gray-900">Project Showcase</h4>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${activeService.color} text-white`}
                >
                  {activeService.title}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-6">
                A real-world example of our {activeService.title.toLowerCase()}{" "}
                expertise delivering measurable results.
              </p>

              <div className="flex flex-wrap gap-2">
                {activeService.features
                  .slice(0, 3)
                  .map((feature: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {feature.split(" ")[0]}
                    </span>
                  ))}
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  +{activeService.features.length - 3} more
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className={`absolute -bottom-6 -left-6 w-32 h-32 ${activeService.bgColor} rounded-2xl transform -rotate-12 z-[-1]`}
            ></div>
            <div
              className={`absolute -top-6 -right-6 w-28 h-28 ${activeService.bgColor} rounded-2xl transform rotate-6 z-[-1]`}
            ></div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 left-10 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="mr-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${activeService.color}`}
                  >
                    <span className="text-white font-bold text-sm">+</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Client Satisfaction
                  </div>
                  <div className="text-xs text-gray-500">
                    98% Positive Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to start your project?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let&apos;s combine our three areas of expertise to create something
            amazing for your business.
          </p>
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
