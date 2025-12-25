import { User, Building2, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <User className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl sm:text-4xl font-bold">About Founder</h2>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Daggupati Navaneeswar is a visionary entrepreneur and technologist with a deep passion for
                Artificial Intelligence and Machine Learning. As the Founder & CEO of NEXOVGEN, he leads the
                charge in creating intelligent, scalable solutions that address real-world challenges.
              </p>

              <p>
                With a strong background in AI/ML and full-stack development, Navaneeswar combines technical
                expertise with strategic business acumen. His leadership philosophy centers on innovation,
                continuous learning, and building technology that makes a meaningful impact.
              </p>

              <p>
                Beyond technical excellence, he is committed to fostering a culture of collaboration and
                pushing the boundaries of what's possible with next-generation technology.
              </p>

              <div className="pt-4">
                <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                  <p className="text-cyan-400 font-semibold">
                    "Innovation is not just about technology—it's about solving problems that matter."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Building2 className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-bold">About NEXOVGEN</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                <Target className="w-6 h-6 text-cyan-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Vision</h3>
                <p className="text-gray-300">
                  To become a leading force in AI-driven innovation, creating intelligent solutions that
                  transform industries and improve lives globally.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                <TrendingUp className="w-6 h-6 text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Mission</h3>
                <p className="text-gray-300">
                  Building cutting-edge AI and automation solutions that solve complex problems, enhance
                  productivity, and drive sustainable growth for businesses and communities.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Focus Areas</h3>
                <div className="flex flex-wrap gap-3">
                  {['Artificial Intelligence', 'Machine Learning', 'Automation', 'Web Solutions', 'SaaS Products', 'System Design'].map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Long-term Roadmap</h3>
                <p className="text-gray-300">
                  NEXOVGEN is committed to continuous innovation, scaling AI solutions, expanding into
                  emerging markets, and building strategic partnerships that accelerate technological
                  advancement and create lasting value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
