import { Award, Trophy, GraduationCap, Medal, Star, CheckCircle } from 'lucide-react';

const achievements = [
  {
    year: '2025',
    title: 'Founded NEXOVGEN',
    description: 'Launched NEXOVGEN with a vision to revolutionize AI-driven solutions for businesses worldwide',
    icon: Trophy,
    type: 'milestone',
  },
  {
    year: '2024',
    title: 'AI Innovation Award',
    description: 'Recognized for developing breakthrough ML models that improved prediction accuracy by 40%',
    icon: Award,
    type: 'achievement',
  },
  {
    year: '2024',
    title: 'National Hackathon Winner',
    description: 'First place in AI/ML category for building real-time sentiment analysis system',
    icon: Medal,
    type: 'competition',
  },
  {
    year: '2023',
    title: 'AWS Solutions Architect Certified',
    description: 'Achieved professional certification in cloud architecture and scalable system design',
    icon: GraduationCap,
    type: 'certification',
  },
  {
    year: '2023',
    title: 'Open Source Contributor',
    description: 'Contributed to major ML frameworks with 500+ stars on GitHub projects',
    icon: Star,
    type: 'achievement',
  },
  {
    year: '2022',
    title: 'Tech Leadership Recognition',
    description: 'Awarded for exceptional leadership in driving innovation and team excellence',
    icon: CheckCircle,
    type: 'achievement',
  },
];

const typeColors: Record<string, string> = {
  milestone: 'from-cyan-500 to-blue-500',
  achievement: 'from-blue-500 to-cyan-500',
  competition: 'from-cyan-400 to-blue-400',
  certification: 'from-blue-400 to-cyan-400',
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Award className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold">Achievements & Recognition</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones, certifications, and recognitions that reflect a commitment to excellence
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-x-8`}
                >
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className={`inline-block ${isEven ? 'md:float-right' : 'md:float-left'} w-full md:w-auto`}>
                      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                        <div className={`flex items-center space-x-3 mb-3 ${isEven ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                          <div className={`p-2 bg-gradient-to-br ${typeColors[achievement.type]}/20 rounded-lg`}>
                            <Icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <span className="text-sm font-semibold text-cyan-400">{achievement.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full transform -translate-x-1.5 border-4 border-gray-900 z-10"></div>

                  <div className="w-full md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
