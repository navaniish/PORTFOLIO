import { Brain, Code, Layers, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      'Deep Learning & Neural Networks',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'TensorFlow & PyTorch',
      'Model Deployment & MLOps',
    ],
    color: 'cyan',
  },
  {
    category: 'Full-Stack Development',
    icon: Code,
    skills: [
      'React & Next.js',
      'Node.js & Python',
      'RESTful & GraphQL APIs',
      'Database Design (SQL & NoSQL)',
      'Cloud Architecture (AWS, GCP)',
      'Docker & Kubernetes',
    ],
    color: 'blue',
  },
  {
    category: 'System Design',
    icon: Layers,
    skills: [
      'Scalable Architecture',
      'Microservices Design',
      'Distributed Systems',
      'Performance Optimization',
      'Security Best Practices',
      'API Design & Integration',
    ],
    color: 'cyan',
  },
  {
    category: 'Startup & Product Strategy',
    icon: Lightbulb,
    skills: [
      'Product Development Lifecycle',
      'Market Analysis & Positioning',
      'Team Leadership & Management',
      'Investor Relations',
      'Growth Strategy & Scaling',
      'Agile & Lean Methodologies',
    ],
    color: 'blue',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set spanning technical excellence and strategic business leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${
                    category.color === 'cyan' ? 'from-cyan-500/20 to-cyan-600/20' : 'from-blue-500/20 to-blue-600/20'
                  } rounded-lg`}>
                    <Icon className={`w-6 h-6 ${category.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        category.color === 'cyan' ? 'bg-cyan-400' : 'bg-blue-400'
                      }`}></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
