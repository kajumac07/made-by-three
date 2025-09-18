"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | {
    type: "success" | "error";
    msg: string;
  }>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate inputs before submit
  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Enter a valid email";
    if (!formData.subject.trim()) return "Subject is required";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const error = validateForm();
    if (error) {
      setStatus({ type: "error", msg: error });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setStatus({
          type: "success",
          msg: "Your message has been sent successfully!",
        });
      } else {
        const data = await res.json();
        setStatus({ type: "error", msg: data.error || "Something went wrong" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        msg: "Network error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      {/* Background decorative elements - same as Hero */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Get in touch with us
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Let&apos;s <span className="text-blue-600">Talk</span> About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Your Project
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Have an idea you want to bring to life? We&apos;re here to help.
              Fill out the form or use our contact details to start the
              conversation.
            </p>

            {/* Contact information */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email us</p>
                  <p className="text-gray-900 font-medium">
                    hello@madebythree.com
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Phone className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Call us</p>
                  <p className="text-gray-900 font-medium">+91 6393168278</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <MapPin className="text-indigo-600" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Visit us</p>
                  <p className="text-gray-900 font-medium">
                    Chandigarh Region, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Form in card design */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform -rotate-1">
                <div className="absolute -top-4 -right-4 bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Contact Form
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && (
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    )}
                  </button>
                </form>
                {/* Status message */}
                {status && (
                  <p
                    className={`mt-4 text-sm ${
                      status.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status.msg}
                  </p>
                )}
              </div>

              {/* Decorative elements - same as Hero */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl transform -rotate-12 z-[-1]"></div>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-purple-100 rounded-2xl transform rotate-6 z-[-1]"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 left-10 bg-white p-3 rounded-lg shadow-lg flex items-center">
              <div className="mr-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="text-green-600" size={20} />
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold">Quick Response</div>
                <div className="text-xs text-gray-500">Within 24 hours</div>
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
              <div className="text-xs font-semibold mt-2">Team Members</div>
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
