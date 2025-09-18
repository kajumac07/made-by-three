"use client";

import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  Calendar,
  Code,
  TrendingUp,
  Sparkles,
  Users,
  Award,
  Star,
} from "lucide-react";
import Image from "next/image";
import { JSX } from "react";

// Define TypeScript interfaces
interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  skills: string[];
  description: string;
  image: string;
  socials: {
    github?: string;
    email?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    portfolio?: string;
  };
}

interface SkillCategory {
  category: string;
  skills: string[];
  icon: JSX.Element;
  color: string;
}

const AboutUs = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Arun Kumar",
      role: "Digital Marketing Specialist",
      experience: "1 year experience",
      skills: [
        "SEO",
        "Social Media Marketing",
        "Content Strategy",
        "Google Analytics",
        "PPC Campaigns",
      ],
      description:
        "Arun drives our digital marketing strategies with creative campaigns that deliver measurable results. He specializes in growing online presence and converting visitors into customers.",
      image: "/arun.jpeg",
      socials: {
        github: "https://github.com/arunyadav21",
        twitter: "https://x.com/ArunYadav143420",
        instagram: "https://www.instagram.com/travelwitharun1/",
        email: "mailto:arun@madebythree.com",
      },
    },
    {
      id: 2,
      name: "Vipin Patel",
      role: "Web Developer",
      experience: "1 year experience",
      skills: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      description:
        "Vipin creates stunning, responsive web applications with clean code and modern frameworks. He focuses on delivering fast, accessible, and user-friendly experiences.",
      image: "/vipin.jpeg",
      socials: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        portfolio: "#",
        email: "mailto:vipin@madebythree.com",
      },
    },
    {
      id: 3,
      name: "Atul Tiwari",
      role: "App Developer",
      experience: "3 years experience",
      skills: [
        "Flutter",
        "Getx",
        "Firebase",
        "Cloud Functions",
        "Push Notifications",
        "Play Store Deployment",
        "Next.js",
        "iOS Development",
        "SwiftUI",
      ],
      description:
        "Atul brings extensive experience in both app and web development. He builds cross-platform solutions that work seamlessly across all devices and platforms.",
      image: "/atul.jpg",
      socials: {
        github: "#",
        email: "mailto:atul@madebythree.com",
      },
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      category: "Web Development",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
        "Framer Motion",
      ],
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      category: "App Development",
      skills: [
        "Flutter",
        "GetX",
        "iOS Development",
        "SwiftUI",
        "Android",
        "Push Notifications",
        "Cloud Functions",
      ],
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-700",
    },
    {
      category: "Digital Marketing",
      skills: [
        "SEO",
        "Social Media",
        "Content Marketing",
        "Google Analytics",
        "PPC",
        "Email Campaigns",
        "Growth Strategy",
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-700",
    },
  ];

  const stats = [
    {
      value: "8+",
      label: "Projects Completed",
      icon: <Award className="w-5 h-5" />,
    },
    {
      value: "8+",
      label: "Happy Clients",
      icon: <Users className="w-5 h-5" />,
    },
    {
      value: "3",
      label: "Expert Team Members",
      icon: <Star className="w-5 h-5" />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Star className="w-5 h-5" fill="currentColor" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements - matching Hero */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          Three minds, one vision
        </div>

        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          We Are <span className="text-blue-600">MadeByThree</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
          Three minds. Infinite possibilities. <br />
          <span className="text-gray-700">
            We blend <span className="text-blue-600 font-semibold">code</span>,{" "}
            <span className="text-purple-600 font-semibold">creativity</span>,
            and <span className="text-indigo-600 font-semibold">growth</span> to
            build digital experiences that stand out.
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-8 py-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-2">
                <div
                  className={`mr-2 p-2 rounded-full ${
                    i === 0
                      ? "bg-blue-100 text-blue-600"
                      : i === 1
                      ? "bg-purple-100 text-purple-600"
                      : i === 2
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-amber-100 text-amber-600"
                  }`}
                >
                  {stat.icon}
                </div>
                <span className="text-3xl md:text-4xl font-bold text-gray-900">
                  {stat.value}
                </span>
              </div>
              <span className="text-gray-600 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-5xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-7 h-7 text-blue-600" />
            <span className="text-lg font-semibold text-blue-600">
              Founded 2025
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Origin Story
            </span>
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            MadeByThree was born from a late-night brainstorm between three
            friends with a shared vision: to create digital products that are as
            beautiful as they are effective.
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold text-blue-600">Arun</span> brings
            digital marketing mastery,{" "}
            <span className="font-semibold text-purple-600">Vipin</span> crafts
            seamless web experiences, and{" "}
            <span className="font-semibold text-indigo-600">Atul</span>{" "}
            engineers robust apps. Together, we deliver the full spectrum of
            digital innovation.
          </p>
          <p className="text-gray-500">
            Our journey began with a single project, but our passion and synergy
            quickly turned it into a movement. Now, we help brands and startups
            turn ideas into reality.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="MadeByThree Team"
              className="object-cover w-full h-full"
              width={384}
              height={384}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/90 px-5 py-3 rounded-xl text-lg text-gray-900 font-semibold shadow-lg">
              United by Passion
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <h3 className="text-4xl font-bold text-center mb-6">
          Meet{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Our Team
          </span>
        </h3>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Three experts, each with unique skills, working together to deliver
          exceptional results for your projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center p-8">
                {/* Larger image with better styling */}
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 text-sm rounded-full font-semibold shadow-md">
                    {member.experience}
                  </span>
                </div>

                <h4 className="text-2xl font-bold mb-2 text-gray-900">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
                  {member.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-3">
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors transform hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors transform hover:scale-110"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      className="p-3 rounded-full bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-700 transition-colors transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.portfolio && (
                    <a
                      href={member.socials.portfolio}
                      className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 transition-colors transform hover:scale-110"
                      aria-label="Portfolio"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={member.socials.email}
                      className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors transform hover:scale-110"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <h3 className="text-4xl font-bold text-center mb-6">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Combined Skills
          </span>
        </h3>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          We bring together expertise across multiple disciplines to deliver
          comprehensive digital solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300"
            >
              <div
                className={`mb-6 p-4 rounded-full ${category.color} shadow-md`}
              >
                {category.icon}
              </div>
              <h4 className="text-xl font-bold mb-6 text-gray-900">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center mt-24">
        <div className="bg-white rounded-2xl p-12 shadow-2xl border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to create something extraordinary?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Let&apos;s join forces and turn your vision into a digital
            masterpiece. Reach out and let&apos;s build together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
          >
            Get Started
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
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
};

export default AboutUs;
