import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in collaboration, investment opportunities, or just want to connect? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:nexovgen.contact@zohomail.in" className="text-white hover:text-cyan-400 transition-colors">
                      nexovgen.contact@zohomail.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect on Social</h3>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all group"
                >
                  <Linkedin className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="font-semibold group-hover:text-cyan-400 transition-colors">LinkedIn</p>
                    <p className="text-sm text-gray-400">Professional Network</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all group"
                >
                  <Github className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-semibold group-hover:text-cyan-400 transition-colors">GitHub</p>
                    <p className="text-sm text-gray-400">Open Source Contributions</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
                    submitted
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50'
                  }`}
                >
                  {submitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
