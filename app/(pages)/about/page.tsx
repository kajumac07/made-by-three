"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Star, Award, Users, Mail, Clipboard } from "lucide-react";

type ServiceKey = "web" | "app" | "marketing";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<ServiceKey>("web");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const services = {
    web: {
      title: "Web Development",
      description:
        "We create high-performance, scalable web applications with modern technologies that deliver exceptional user experiences.",
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
    },
    app: {
      title: "App Development",
      description:
        "We build cross-platform and native mobile applications that provide seamless experiences on all devices.",
      features: [
        "Flutter Cross-Platform Apps",
        "GetX State Management",
        "Cloud Functions",
        "Firebase Integration",
        "Push Notifications",
        "iOS Development with SwiftUI",
        "Android Development",
      ],
    },
    marketing: {
      title: "Digital Marketing",
      description:
        "We develop data-driven marketing strategies that increase your online visibility and drive growth.",
      features: [
        "SEO & SEM Strategies",
        "Social Media Marketing",
        "Content Marketing",
        "Email Campaigns",
        "Google Analytics",
        "Conversion Optimization",
        "PPC Advertising",
      ],
    },
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <section className="relative z-10 max-w-6xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-100/50 overflow-hidden">
        <div className="md:flex">
          {/* Left: Profile card */}
          <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-600 p-10 text-white flex flex-col">
            <div className="flex flex-col items-center">
              <div className="w-44 h-44 rounded-full overflow-hidden ring-4 ring-white/90 shadow-2xl mb-8 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/three.jpg"
                  alt="Arun Atul Vipin"
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>

              <h1 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Arun, Atul & Vipin
              </h1>
              <p className="text-sm opacity-95 mt-2 bg-white/15 px-4 py-1.5 rounded-full backdrop-blur-sm">
                Founders — MadeByThree
              </p>

              <div className="mt-6 w-full">
                <p className="text-sm leading-relaxed text-center text-blue-50">
                  We build clean, conversion-focused websites and run
                  performance marketing campaigns that grow businesses.
                  Combining design, code and measurable marketing.
                </p>
              </div>

              <div className="mt-8 flex gap-4 flex-wrap justify-center">
                <a
                  href="mailto:hello@aavdigital.com"
                  className="bg-white/20 hover:bg-white/30 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm flex items-center gap-2"
                >
                  <Mail size={16} />
                  Email Us
                </a>
                <Link
                  href="#contact"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <Clipboard size={16} />
                  Hire Us
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-5 text-sm text-blue-100">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/20">
              <h3 className="font-semibold text-lg mb-4 text-white/90">
                Our Expertise
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span className="text-sm text-blue-100">Web Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span className="text-sm text-blue-100">App Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span className="text-sm text-blue-100">
                    Digital Marketing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-3/5 p-10">
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Three skills, one vision
                </div>

                <h2 className="text-4xl font-bold text-gray-900">
                  About{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    MadeByThree
                  </span>
                </h2>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  We are three friends — Arun, Atul and Vipin — who turned a
                  shared passion for web and marketing into a full-service
                  studio. We create pixel‑perfect websites and run ad campaigns
                  that actually convert.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 my-12 p-6 bg-white rounded-2xl shadow-md">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <Users className="text-blue-600 mr-2" size={20} />
                  <span className="text-2xl font-bold text-gray-900">150+</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Happy Clients</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center">
                  <Award className="text-purple-600 mr-2" size={20} />
                  <span className="text-2xl font-bold text-gray-900">80+</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Projects Completed</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center">
                  <Star className="text-indigo-600 mr-2" size={20} />
                  <span className="text-2xl font-bold text-gray-900">
                    4.9/5
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Client Rating</p>
              </div>
            </div>

            {/* Services Section with Tabs */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Our Services
              </h3>

              <div className="flex border-b border-gray-200">
                <button
                  className={`py-3 px-6 font-medium text-sm ${
                    activeTab === "web"
                      ? "text-blue-600 border-b-2 border-blue-500"
                      : "text-gray-500 hover:text-gray-700"
                  } transition-colors duration-300`}
                  onClick={() => setActiveTab("web")}
                >
                  Web Development
                </button>
                <button
                  className={`py-3 px-6 font-medium text-sm ${
                    activeTab === "app"
                      ? "text-blue-600 border-b-2 border-blue-500"
                      : "text-gray-500 hover:text-gray-700"
                  } transition-colors duration-300`}
                  onClick={() => setActiveTab("app")}
                >
                  App Development
                </button>
                <button
                  className={`py-3 px-6 font-medium text-sm ${
                    activeTab === "marketing"
                      ? "text-blue-600 border-b-2 border-blue-500"
                      : "text-gray-500 hover:text-gray-700"
                  } transition-colors duration-300`}
                  onClick={() => setActiveTab("marketing")}
                >
                  Digital Marketing
                </button>
              </div>

              <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                <h4 className="text-xl font-semibold text-blue-700">
                  {services[activeTab].title}
                </h4>
                <p className="mt-3 text-gray-700">
                  {services[activeTab].description}
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  {services[activeTab].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white/80 p-4 rounded-lg shadow-sm border border-gray-100"
                    >
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Our Journey
              </h3>
              <div className="space-y-8 border-l-2 border-blue-200 ml-3 pl-8">
                <div className="relative">
                  <div className="absolute -left-11 top-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-900">
                      Jan-2025 — Company founded
                    </p>
                    <p className="mt-2 text-gray-600">
                      Started as a small team focused on web presence and ads
                      management.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-11 top-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-900">
                      Sep-2025 — First 10 clients
                    </p>
                    <p className="mt-2 text-gray-600">
                      Delivered websites and ad campaigns for local businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="contact" className="mt-16 pt-12 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in touch
              </h3>
              <p className="text-gray-600 text-lg">
                Want us to build your website or run your next growth campaign?
                Send a message.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
                    placeholder="I'm looking for a website for my business..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>

              <p className="mt-8 text-center text-gray-500">
                Or email us directly at{" "}
                <a
                  href="mailto:hello@madebythree.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  hello@madebythree.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
