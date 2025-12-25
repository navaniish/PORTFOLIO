import { Code2, Brain, Zap, Database, Globe, Bot } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    problem: 'Businesses struggle to extract actionable insights from large datasets quickly and efficiently.',
    tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS'],
    role: 'Led end-to-end development, from architecture design to ML model deployment',
    impact: 'Reduced data analysis time by 70% and improved decision-making accuracy by 45%',
    icon: Brain,
    color: 'cyan',
  },
  {
    title: 'Smart Automation Suite',
    problem: 'Manual repetitive tasks consuming valuable time and resources in enterprise workflows.',
    tech: ['Node.js', 'Python', 'RPA', 'Docker', 'Kubernetes'],
    role: 'Designed automation architecture and implemented intelligent workflow optimization',
    impact: 'Automated 80% of repetitive tasks, saving 1000+ hours monthly across teams',
    icon: Zap,
    color: 'blue',
  },
  {
    title: 'Next-Gen SaaS Platform',
    problem: 'Small businesses need affordable, scalable solutions for customer relationship management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe'],
    role: 'Full-stack development, system architecture, and payment integration',
    impact: 'Onboarded 500+ SMBs with 95% customer satisfaction and 60% YoY growth',
    icon: Globe,
    color: 'cyan',
  },
  {
    title: 'Conversational AI Assistant',
    problem: 'Customer support teams overwhelmed with repetitive queries and slow response times.',
    tech: ['NLP', 'GPT', 'FastAPI', 'React', 'WebSocket'],
    role: 'Designed and trained NLP models, integrated real-time communication systems',
    impact: 'Handled 85% of queries autonomously, reduced response time by 90%',
    icon: Bot,
    color: 'blue',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold">Projects & Innovations</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into impactful solutions through cutting-edge technology and strategic innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${
                    project.color === 'cyan' ? 'from-cyan-500/20 to-cyan-600/20' : 'from-blue-500/20 to-blue-600/20'
                  } rounded-lg`}>
                    <Icon className={`w-6 h-6 ${project.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1">Problem Statement</p>
                    <p className="text-gray-300">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-2">Technology Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1">Founder's Role</p>
                    <p className="text-gray-300 text-sm">{project.role}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-700">
                    <p className="text-sm text-gray-500 font-semibold mb-1">Impact & Outcome</p>
                    <p className={`font-medium ${project.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'}`}>
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
