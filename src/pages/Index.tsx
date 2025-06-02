
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Brain, Palette, Download, Menu, X, Trophy, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'achievements', 'certifications', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  const skills = [
    { category: 'Programming', items: ['Python', 'C', 'Java', 'R'] },
    { category: 'Web & Database', items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'SQL'] },
    { category: 'Tools', items: ['VS Code', 'Git', 'Canva', 'MATLAB', 'RStudio'] },
    { category: 'Specialties', items: ['AI/ML', 'Web Development', 'Poster Design', 'Team Leadership'] },
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning Engineering',
      description: 'Custom ML models and data analysis solutions for complex business problems.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Responsive websites and web applications built with modern technologies.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Poster Design',
      description: 'Creative visual designs for events, marketing, and brand communications.'
    },
  ];

  const projects = [
    {
      title: 'Loan Approval Prediction ML',
      description: 'Machine learning model using Python, pandas, scikit-learn with multiple algorithms including KNN, Random Forest, SVM, and Logistic Regression.',
      tech: ['Python', 'scikit-learn', 'pandas', 'ML'],
      github: '#'
    },
    {
      title: 'Water Quality Analysis',
      description: 'ML classification model achieving 80%+ accuracy using Random Forest, SVM, and Decision Tree algorithms.',
      tech: ['Python', 'ML', 'Data Analysis'],
      github: 'https://github.com/karthikkemidi/WaterPotability'
    },
    {
      title: 'Drowsiness Detection',
      description: 'Real-time monitoring system for detecting driver drowsiness using computer vision.',
      tech: ['Python', 'OpenCV', 'ML'],
      github: 'https://github.com/karthikkemidi/DrowsinessDetection'
    },
    {
      title: 'Music Player Web App',
      description: 'Feature-rich music player with custom audio controls and dynamic playlists.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/karthikkemidi/Spotify-Clone'
    },
  ];

  const experience = [
    {
      title: 'Winter Intern',
      company: 'Indian Space Lab',
      year: '2025',
      description: 'Working on space technology and satellite data analysis projects.',
      link: 'https://drive.google.com/file/d/1GaN1Ia2vetv6T_SfvXWIOPCwfIuy1UxY/view?usp=sharing'
    },
    {
      title: 'Virtual Intern',
      company: 'Google AI-ML',
      year: '2024',
      description: 'Gained expertise in artificial intelligence and machine learning technologies.',
      link: 'https://drive.google.com/file/d/1FEdn3U8wNvH8uYMXBbI8R9_BuFRl13Q_/view?usp=sharing'
    },
    {
      title: 'Virtual Intern',
      company: 'Salesforce Developer',
      year: '2023',
      description: 'Developed skills in Salesforce platform and cloud-based solutions.',
      link: 'https://drive.google.com/file/d/1N1hsA0-_Bgd4-z2xQ0BhkTQxmo5p40Ht/view?usp=sharing'
    },
  ];

  const achievements = [
    {
      title: 'Champion Milestone in GoogleCloud Arcade',
      period: 'Jul 2024 - Dec 2024',
      description: 'Achieved champion milestone in Google Cloud Arcade program, demonstrating proficiency in cloud technologies.',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: 'Chess Winners Shruthi\'25',
      period: '2025',
      description: 'Winner in chess competition at Shruthi\'25, the annual event in college.',
      icon: <Award className="w-6 h-6" />
    },
  ];

  const certifications = [
    'MongoDB Associate Developer Python',
    'Salesforce Associate Developer',
    'Problem Solving Through Programming in C (NPTEL)',
    'Web Development (Internshala)',
    'Programming in Java (Infosys Springboard)',
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold gradient-text">KK</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors hover:text-emerald-400 ${
                    activeSection === item.href.slice(1) ? 'text-emerald-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-card mt-2 mx-4 rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="floating-element">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full glow-effect overflow-hidden">
              <img 
                src="https://i.postimg.cc/6qW72NG3/Screenshot-2023-0205-130522.jpg" 
                alt="Karthik Kemidi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 typewriter font-poppins">
            Karthik Kemidi
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 gradient-text font-medium">
            AI/ML Engineer | Web Developer | Problem Solver
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            I am Karthik Kemidi, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Chaitanya Bharathi Institute of Technology, Hyderabad. I am passionate about building intelligent systems and web applications that solve real-world problems. With hands-on experience in machine learning, web development, and multiple virtual internships, I aim to innovate and contribute to impactful tech solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
              <a href="https://github.com/karthikkemidi" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-navy-900 transition-all duration-300 hover:scale-105">
              <a href="https://www.linkedin.com/in/karthik-kemidi-b4924a25a/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="secondary" className="transition-all duration-300 hover:scale-105">
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Education</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold">B.E. CSE-AIML</h4>
                    <p className="text-gray-300">Chaitanya Bharathi Institute of Technology, Hyderabad</p>
                    <p className="text-purple-400">2022-2026 | CGPA: 9.16/10.0</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Intermediate</h4>
                    <p className="text-gray-300">Narayana Junior College</p>
                    <p className="text-purple-400">2020-2022 | 98.1%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {['OOP', 'Python', 'Data Structures', 'DBMS', 'Computer Architecture', 'Web Technologies', 'AI', 'ML'].map((course) => (
                    <span key={course} className="px-3 py-2 bg-emerald-600/20 border border-emerald-400/30 rounded-full text-sm text-emerald-300">
                      {course}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-emerald-400 group-hover:text-purple-400 transition-colors">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="text-gray-300 hover:text-white transition-colors">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-emerald-400 group-hover:text-purple-400 transition-colors mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-600/20 border border-purple-400/30 rounded text-xs text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.github !== '#' && (
                    <Button asChild size="sm" variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-navy-900">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Experience</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-purple-400"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <Card className={`glass-card w-full md:w-96 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} hover:scale-105 transition-all duration-300`}>
                    <CardContent className="p-6">
                      <div className="text-purple-400 text-sm font-medium mb-2">{exp.year}</div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <h4 className="text-emerald-400 font-semibold mb-3">{exp.company}</h4>
                      <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                      <Button asChild size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-navy-900">
                        <a href={exp.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-emerald-400 group-hover:text-purple-400 transition-colors mr-4">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-purple-400 text-sm">{achievement.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-navy-900 font-bold text-xl">✓</span>
                  </div>
                  <h3 className="font-semibold group-hover:text-emerald-400 transition-colors">
                    {cert}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:kemidikarthik2004@gmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                        kemidikarthik2004@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919515513353" className="text-gray-300 hover:text-emerald-400 transition-colors">
                        +91 9515513353
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-300">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-gray-300 mb-4">Let's connect on social media:</p>
                  <div className="flex gap-4">
                    <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      <a href="https://www.linkedin.com/in/karthik-kemidi-b4924a25a/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-navy-900">
                      <a href="https://github.com/karthikkemidi" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Send a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-navy-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-navy-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-navy-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-700 hover:to-purple-700 transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Karthik Kemidi. Built with passion for technology and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
