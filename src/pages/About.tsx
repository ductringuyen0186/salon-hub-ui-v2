import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Backend Engineer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Leading development of distributed systems and microservices architecture.',
    },
    {
      title: 'Backend Engineer',
      company: 'Startup Inc.',
      period: '2021 - 2023',
      description: 'Built scalable APIs and implemented cloud infrastructure solutions.',
    },
    {
      title: 'Software Developer',
      company: 'Development Agency',
      period: '2020 - 2021',
      description: 'Developed full-stack applications and maintained legacy systems.',
    },
  ];

  const skills = [
    { category: 'Languages', items: ['Go', 'Python', 'JavaScript/TypeScript', 'Java', 'SQL'] },
    { category: 'Frameworks', items: ['Gin', 'FastAPI', 'React', 'Node.js', 'Spring Boot'] },
    { category: 'Databases', items: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'] },
    { category: 'Tools', items: ['Git', 'gRPC', 'RabbitMQ', 'Prometheus', 'Grafana'] },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center">
              <span className="text-white font-bold text-4xl">DN</span>
            </div>
            
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin size={18} />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              I'm a passionate backend engineer with a strong focus on building distributed systems 
              and scalable architectures. I love solving complex problems and creating efficient, 
              reliable software solutions that can handle millions of users.
            </p>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">My professional journey in software development</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mt-2 md:mt-0">
                    <Award size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600">Technologies I work with on a daily basis</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-900">Beyond Code</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What drives me</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm passionate about creating software that makes a real impact. Whether it's 
                  optimizing a database query to save milliseconds or architecting a system that 
                  can scale to millions of users, I find joy in the technical challenges and the 
                  problem-solving process.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">When I'm not coding</h3>
                <p className="text-gray-600 leading-relaxed">
                  You can find me exploring new technologies, contributing to open source projects, 
                  or enjoying the outdoors. I believe in continuous learning and staying up-to-date 
                  with the latest trends in software engineering and distributed systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
