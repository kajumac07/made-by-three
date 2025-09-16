"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Play,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  Eye,
} from "lucide-react";

// Define TypeScript interfaces
interface Project {
  id: number;
  title: string;
  category: "web" | "app" | "marketing";
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  results: string[];
}

interface FilterOption {
  id: string;
  label: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filters: FilterOption[] = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "app", label: "App Development" },
    { id: "marketing", label: "Digital Marketing" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description:
        "A fully responsive e-commerce solution with seamless checkout and modern UI built with React and Next.js.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      results: ["+200% conversions", "40% faster load times"],
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "app",
      description:
        "Cross-platform fitness app with workout plans and progress tracking using Flutter and Firebase.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Firebase", "GetX", "Cloud Functions"],
      liveUrl: "#",
      githubUrl: "#",
      results: ["50K+ downloads", "4.8★ rating"],
    },
    {
      id: 3,
      title: "SEO Campaign - Fashion Brand",
      category: "marketing",
      description:
        "Comprehensive SEO strategy that increased organic traffic and conversions for a fashion retailer.",
      image: "/api/placeholder/600/400",
      technologies: ["SEO", "Content Strategy", "Google Analytics"],
      liveUrl: "#",
      results: ["+300% organic traffic", "Top 3 rankings for key terms"],
    },
    {
      id: 4,
      title: "Real Estate Dashboard",
      category: "web",
      description:
        "Interactive dashboard for real estate agents to manage properties and clients with real-time updates.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Framer Motion", "Firebase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      results: ["30% time savings", "Improved client engagement"],
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "app",
      description:
        "Native iOS and Android app for food ordering and delivery tracking with real-time notifications.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "SwiftUI", "Firebase", "Push Notifications"],
      liveUrl: "#",
      results: ["25% faster order processing", "4.9★ rating"],
    },
    {
      id: 6,
      title: "Social Media Campaign - Tech Startup",
      category: "marketing",
      description:
        "Viral social media campaign that increased brand awareness and leads for a tech startup.",
      image: "/api/placeholder/600/400",
      technologies: ["Social Media", "Content Creation", "PPC"],
      liveUrl: "#",
      results: ["+500% engagement", "2K+ new leads"],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openProject = (project: Project, index: number): void => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeProject = (): void => {
    setSelectedProject(null);
  };

  const navigateProject = (direction: "prev" | "next"): void => {
    let newIndex: number;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredProjects.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    }
    setCurrentIndex(newIndex);
    setSelectedProject(filteredProjects[newIndex]);
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "web":
        return "from-blue-500 to-cyan-500";
      case "app":
        return "from-purple-500 to-pink-500";
      case "marketing":
        return "from-amber-500 to-orange-500";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  const getCategoryBgColor = (category: string): string => {
    switch (category) {
      case "web":
        return "bg-blue-50";
      case "app":
        return "bg-purple-50";
      case "marketing":
        return "bg-amber-50";
      default:
        return "bg-gray-50";
    }
  };

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our work across web development, app creation, and digital
            marketing campaigns that deliver real results.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-700 bg-white hover:bg-gray-100 shadow-md"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openProject(project, index)}
            >
              <div className="relative overflow-hidden h-64">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(
                    project.category
                  )} flex items-center justify-center`}
                >
                  <div className="text-white text-center p-4">
                    <div className="text-2xl font-bold mb-2">
                      {project.title}
                    </div>
                    <div className="text-sm opacity-80">
                      {project.category.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 inline-flex mb-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-medium">View Project</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryBgColor(
                      project.category
                    )} ${
                      project.category === "web"
                        ? "text-blue-800"
                        : project.category === "app"
                        ? "text-purple-800"
                        : "text-amber-800"
                    }`}
                  >
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center text-sm text-blue-600 font-medium">
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Want to see more of our work?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We&apos;ve completed hundreds of projects for clients across various
            industries.
          </p>
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
            View Full Portfolio
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className={`relative h-72 bg-gradient-to-br ${getCategoryColor(
                selectedProject.category
              )}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </div>
                  <div className="text-sm opacity-80">
                    {selectedProject.category.toUpperCase()} PROJECT
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4">
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded-full ${getCategoryBgColor(
                    selectedProject.category
                  )} ${
                    selectedProject.category === "web"
                      ? "text-blue-800"
                      : selectedProject.category === "app"
                      ? "text-purple-800"
                      : "text-amber-800"
                  }`}
                >
                  {selectedProject.category.toUpperCase()}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateProject("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 backdrop-blur-sm transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateProject("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 backdrop-blur-sm transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Project Overview
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {selectedProject.description}
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Results Delivered
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 space-y-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Live Project
                      </a>
                    )}

                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-all"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </a>
                    )}

                    {selectedProject.category === "marketing" && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-all"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        View Case Study
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
