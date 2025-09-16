"use client";

import { useState } from "react";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  project: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "NexTech Solutions",
      image: "/api/placeholder/80/80",
      content:
        "MadeByThree transformed our online presence completely. Their web development and marketing strategies increased our conversion rate by 140% in just three months. Their team is professional, creative, and delivers on time.",
      rating: 5,
      project: "E-commerce Website & Marketing Campaign",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "StartupVision",
      image: "/api/placeholder/80/80",
      content:
        "Working with Arun, Vipin, and Atul was a game-changer for our startup. They built our mobile app and web platform with incredible attention to detail. Their technical expertise across different platforms is impressive.",
      rating: 5,
      project: "Mobile App & Web Platform",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Lumina Studios",
      image: "/api/placeholder/80/80",
      content:
        "The team at MadeByThree understands brand identity like no one else. They created a stunning website that perfectly captures our studio's aesthetic while implementing powerful SEO strategies that boosted our visibility.",
      rating: 5,
      project: "Portfolio Website & SEO",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      company: "TechGrowth Inc.",
      image: "/api/placeholder/80/80",
      content:
        "We've worked with many developers, but MadeByThree stands out for their communication skills and ability to understand our vision. They delivered a complex project ahead of schedule with flawless execution.",
      rating: 5,
      project: "SaaS Application Development",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Client Love & Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about their experience working with us.
          </p>
        </div>

        {/* Main testimonial content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Featured testimonial */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 h-full border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="mr-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {testimonials[activeIndex].role},{" "}
                    {testimonials[activeIndex].company}
                  </p>
                  <div className="flex mt-2">
                    {[...Array(testimonials[activeIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-amber-400 fill-current"
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="ml-auto">
                  <Quote className="w-12 h-12 text-blue-200" />
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                &quot;{testimonials[activeIndex].content}&quot;
              </p>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm font-semibold text-blue-700">Project:</p>
                <p className="text-blue-600">
                  {testimonials[activeIndex].project}
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial list */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                  index === activeIndex
                    ? "border-blue-500 shadow-md transform -translate-y-1"
                    : "border-gray-100 hover:border-blue-300"
                }`}
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-blue-600"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-blue-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-blue-600"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats bar */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm md:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">30+</div>
              <div className="text-sm md:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base">Industries Served</div>
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
