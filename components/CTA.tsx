// components/CTASection.tsx
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform skew-y-6"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Vision into Reality?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let&apos;s collaborate to create something extraordinary. Our team
            is ready to bring your ideas to life with innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>

          <p className="text-sm text-blue-200 mt-6">
            No obligations. No hidden fees. Just quality service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
