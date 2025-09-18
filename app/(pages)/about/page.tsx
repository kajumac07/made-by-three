"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Star,
  Award,
  Users,
  Mail,
  Clipboard,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code,
  Cpu,
  Database,
  Globe,
  Smartphone,
  TrendingUp,
  BarChart3,
  Target,
  Search,
  MailOpen,
  Zap,
  HeartHandshake,
} from "lucide-react";

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

  // Tech stack icons with colors
  const techStack = [
    { icon: <Code size={20} />, name: "Next.js", color: "text-black" },
    { icon: <Cpu size={20} />, name: "React", color: "text-blue-500" },
    { icon: <Database size={20} />, name: "MongoDB", color: "text-green-600" },
    { icon: <Globe size={20} />, name: "Node.js", color: "text-green-500" },
    { icon: <Smartphone size={20} />, name: "Flutter", color: "text-blue-400" },
    {
      icon: <TrendingUp size={20} />,
      name: "Firebase",
      color: "text-yellow-500",
    },
  ];

  // Marketing services
  const marketingServices = [
    {
      icon: <Search size={18} />,
      name: "SEO Optimization",
      desc: "Rank higher on search engines",
    },
    {
      icon: <BarChart3 size={18} />,
      name: "Social Media Marketing",
      desc: "Engage your audience",
    },
    {
      icon: <Target size={18} />,
      name: "PPC Campaigns",
      desc: "Targeted advertising",
    },
    {
      icon: <MailOpen size={18} />,
      name: "Email Marketing",
      desc: "Convert leads to customers",
    },
    {
      icon: <Zap size={18} />,
      name: "Content Strategy",
      desc: "Valuable content that converts",
    },
    {
      icon: <TrendingUp size={18} />,
      name: "Analytics & Reporting",
      desc: "Data-driven decisions",
    },
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <section className="relative z-10 max-w-6xl w-full">
        <div className="md:flex gap-8">
          {/* Left: Profile card, Tech Stack Card, and Digital Marketing Card */}
          <div className="md:w-2/5 mb-8 md:mb-0 space-y-6">
            {/* Profile Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform -rotate-1">
              <div className="absolute -top-4 -right-4 bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Founders
              </div>

              <div className="mb-6 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="h-full flex items-center justify-center">
                  <div className="text-white text-center relative z-10">
                    <div className="text-3xl font-bold mb-2">MadeByThree</div>
                    <div className="text-sm opacity-90">Arun, Atul & Vipin</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-lg mb-4 -mt-16 relative z-10 bg-white">
                  <Image
                    src="/three.jpg"
                    alt="Arun Atul Vipin"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h1 className="text-xl font-bold text-gray-900 text-center">
                  Arun, Atul & Vipin
                </h1>
                <p className="text-sm text-gray-600 mt-1">Founders</p>

                <div className="mt-4">
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    We build clean, conversion-focused websites and run
                    performance marketing campaigns that grow businesses.
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-4 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>

              <div className="flex gap-3 justify-center">
                <a
                  href="mailto:hello@aavdigital.com"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  Email
                </a>
                <Link
                  href="#contact"
                  className="flex-1 bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Clipboard size={16} />
                  Hire Us
                </Link>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl transform -rotate-12 z-[-1]"></div>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-purple-100 rounded-2xl transform rotate-6 z-[-1]"></div>
            </div>

            {/* Tech Stack Card - Updated to match Profile Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-1">
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Expertise
              </div>

              <div className="mb-6 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="h-full flex items-center justify-center">
                  <div className="text-white text-center relative z-10">
                    <div className="text-2xl font-bold mb-2">
                      Our Tech Stack
                    </div>
                    <div className="text-sm opacity-90">Modern & Powerful</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg mb-4 -mt-12 relative z-10 bg-white flex items-center justify-center">
                  <Cpu className="text-blue-600" size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center">
                  Technology Expertise
                </h3>
                <p className="text-sm text-gray-600 mt-1 text-center">
                  We use cutting-edge technologies to build powerful solutions
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 hover:bg-blue-50 rounded-lg p-3 flex items-center space-x-2 transition-all border border-gray-100"
                  >
                    <div className={tech.color}>{tech.icon}</div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <h4 className="text-sm font-semibold mb-2 text-gray-900">
                  Specialized In
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SPAs",
                    "PWAs",
                    "Responsive UI",
                    "API Integration",
                    "Cloud Functions",
                    "SEO",
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white text-blue-700 px-2 py-1 rounded-full border border-blue-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-2xl transform -rotate-12 z-[-1]"></div>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-orange-100 rounded-2xl transform rotate-6 z-[-1]"></div>
            </div>

            {/* Digital Marketing Card - Updated to match Profile Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform -rotate-1">
              <div className="absolute -top-4 -right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Growth
              </div>

              <div className="mb-6 h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="h-full flex items-center justify-center">
                  <div className="text-white text-center relative z-10">
                    <div className="text-2xl font-bold mb-2">
                      Digital Marketing
                    </div>
                    <div className="text-sm opacity-90">
                      Data-Driven Results
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg mb-4 -mt-12 relative z-10 bg-white flex items-center justify-center">
                  <TrendingUp className="text-amber-600" size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center">
                  Marketing Services
                </h3>
                <p className="text-sm text-gray-600 mt-1 text-center">
                  We drive growth through data-driven marketing strategies
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {marketingServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 hover:bg-purple-50 rounded-lg p-3 transition-all border border-gray-100"
                  >
                    <div className="flex items-center mb-1">
                      <div className="text-amber-600 mr-2">{service.icon}</div>
                      <span className="text-sm font-medium">
                        {service.name}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs">{service.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 rounded-lg p-4 mt-4">
                <div className="flex items-center mb-2">
                  <HeartHandshake size={16} className="mr-2 text-amber-600" />
                  <h4 className="text-sm font-semibold text-gray-900">
                    Our Approach
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data-Driven",
                    "ROI-Focused",
                    "Audience Targeting",
                    "A/B Testing",
                    "Conversion Optimization",
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white text-amber-700 px-2 py-1 rounded-full border border-amber-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-2xl transform -rotate-12 z-[-1]"></div>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-pink-100 rounded-2xl transform rotate-6 z-[-1]"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-3/5 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-100/50 p-8">
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
                  We`re three friends — Arun, Atul, and Vipin — who turned our
                  passion for digital into a studio that blends creativity and
                  performance. From sleek websites to powerful apps and
                  high-converting marketing campaigns, we help brands grow in
                  the digital space.
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
