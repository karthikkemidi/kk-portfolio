
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Brain, Palette, Download, Menu, X, ChevronDown, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'certifications', 'contact'];
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
    { href: '#contact', label: 'Contact' },
  ];

  const skills = [
    { category: 'Programming', items: ['Python', 'C', 'Java', 'R'], color: 'from-blue-500 to-cyan-500' },
    { category: 'Web & Database', items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'SQL'], color: 'from-emerald-500 to-teal-500' },
    { category: 'Tools', items: ['VS Code', 'Git', 'Canva', 'MATLAB', 'RStudio'], color: 'from-purple-500 to-pink-500' },
    { category: 'Specialties', items: ['AI/ML', 'Web Development', 'Poster Design', 'Team Leadership'], color: 'from-orange-500 to-red-500' },
  ];

  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Machine Learning Engineering',
      description: 'Custom ML models and data analysis solutions for complex business problems using cutting-edge algorithms.',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Responsive websites and web applications built with modern technologies and best practices.',
      gradient: 'from-emerald-600 to-cyan-600'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Poster Design',
      description: 'Creative visual designs for events, marketing, and brand communications that captivate audiences.',
      gradient: 'from-pink-600 to-orange-600'
    },
  ];

  const projects = [
    {
      title: 'Loan Approval Prediction ML',
      description: 'Advanced machine learning model using Python, pandas, scikit-learn with multiple algorithms including KNN, Random Forest, SVM, and Logistic Regression for accurate loan approval predictions.',
      tech: ['Python', 'scikit-learn', 'pandas', 'ML'],
      github: '#',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Water Quality Analysis',
      description: 'Comprehensive ML classification model achieving 80%+ accuracy using Random Forest, SVM, and Decision Tree algorithms for water potability assessment.',
      tech: ['Python', 'ML', 'Data Analysis'],
      github: 'https://github.com/karthikkemidi/WaterPotability',
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'Drowsiness Detection',
      description: 'Real-time monitoring system for detecting driver drowsiness using advanced computer vision techniques and machine learning algorithms.',
      tech: ['Python', 'OpenCV', 'ML'],
      github: 'https://github.com/karthikkemidi/DrowsinessDetection',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Music Player Web App',
      description: 'Feature-rich music player with custom audio controls, dynamic playlists, and modern user interface built with web technologies.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: '#',
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      title: 'Spotify Clone',
      description: 'Complete web application recreation of Spotify with modern UI, music streaming capabilities, and responsive design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/karthikkemidi/Spotify-Clone',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
  ];

  const experience = [
    {
      title: 'Winter Intern',
      company: 'Indian Space Lab',
      year: '2025',
      description: 'Working on cutting-edge space technology and satellite data analysis projects, contributing to innovative space research initiatives.',
      color: 'blue'
    },
    {
      title: 'Virtual Intern',
      company: 'Google AI-ML',
      year: '2024',
      description: 'Gained comprehensive expertise in artificial intelligence and machine learning technologies through hands-on projects and mentorship.',
      color: 'emerald'
    },
    {
      title: 'Virtual Intern',
      company: 'Salesforce Developer',
      year: '2023',
      description: 'Developed advanced skills in Salesforce platform and cloud-based solutions, working on enterprise-level applications.',
      color: 'purple'
    },
  ];

  const certifications = [
    { name: 'MongoDB Associate Developer Python', icon: <Award className="w-6 h-6" /> },
    { name: 'Salesforce Associate Developer', icon: <Award className="w-6 h-6" /> },
    { name: 'Problem Solving Through Programming in C (NPTEL)', icon: <Star className="w-6 h-6" /> },
    { name: 'Web Development (Internshala)', icon: <Code className="w-6 h-6" /> },
    { name: 'Programming in Java (Infosys Springboard)', icon: <Brain className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              KK
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.href.slice(1) ? 'text-cyan-400' : 'text-gray-300'
                  } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
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
                className="hover:bg-white/10"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-card mt-2 mx-4 rounded-lg border border-white/10 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 hero-gradient"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400/50 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="floating-element">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Karthik Kemidi
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl mb-8 font-medium">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI/ML Engineer | Web Developer | Problem Solver
                </span>
              </div>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                I am Karthik Kemidi, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Chaitanya Bharathi Institute of Technology, Hyderabad. I am passionate about building intelligent systems and web applications that solve real-world problems.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  <a href="https://github.com/karthikkemidi" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-navy-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">
                  <a href="https://www.linkedin.com/in/karthik-kemidi-b4924a25a/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  <a href="#contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>

            {/* Image Side */}
            <div className="floating-element lg:order-first">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full glow-effect flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <img 
                    src="https://i.postimg.cc/437mVd0m/Screenshot-2023-0205-130522.jpg" 
                    alt="Karthik Kemidi" 
                    className="w-72 h-72 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  />
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 w-80 h-80 mx-auto rounded-full border-2 border-blue-400/30 animate-pulse"></div>
                <div className="absolute inset-0 w-80 h-80 mx-auto rounded-full border border-cyan-400/20 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-400/20">
                    <h4 className="text-xl font-semibold text-white mb-2">B.E. CSE-AIML</h4>
                    <p className="text-gray-300 mb-1">Chaitanya Bharathi Institute of Technology, Hyderabad</p>
                    <div className="flex items-center">
                      <span className="text-cyan-400 font-semibold">2022-2026 | CGPA: 9.16/10.0</span>
                      <Star className="w-4 h-4 text-yellow-400 ml-2" />
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg border border-emerald-400/20">
                    <h4 className="text-xl font-semibold text-white mb-2">Intermediate</h4>
                    <p className="text-gray-300 mb-1">Narayana Junior College</p>
                    <div className="flex items-center">
                      <span className="text-emerald-400 font-semibold">2020-2022 | 98.1%</span>
                      <Star className="w-4 h-4 text-yellow-400 ml-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400 group-hover:text-pink-400 transition-colors">Coursework</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['OOP', 'Python', 'Data Structures', 'DBMS', 'Computer Architecture', 'Web Technologies', 'AI', 'ML'].map((course, index) => (
                    <span 
                      key={course} 
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300 hover:border-purple-400/60 hover:bg-purple-500/30 transition-all duration-300 cursor-default"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-navy-950/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="glass-card border border-white/10 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-6 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skillGroup.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div 
                        key={skill} 
                        className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 cursor-default text-center"
                        style={{animationDelay: `${skillIndex * 0.1}s`}}
                      >
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

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Services I Offer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card border border-white/10 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-full inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 bg-navy-950/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card border border-white/10 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-500`}></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-cyan-600/20 border border-cyan-400/30 rounded-full text-xs text-cyan-300 hover:bg-cyan-600/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.github !== '#' && (
                    <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full">
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

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400 opacity-50"></div>
            
            <div className="space-y-16">
              {experience.map((exp, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <Card className={`glass-card border border-white/10 w-full md:w-96 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} hover:scale-105 transition-all duration-500 group relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br from-${exp.color}-500/10 to-${exp.color}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <CardContent className="p-6 relative z-10">
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r from-${exp.color}-500 to-${exp.color}-600 text-white text-sm font-medium rounded-full mb-4 shadow-lg`}>
                        {exp.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                      <h4 className={`text-${exp.color}-400 font-semibold mb-3 text-lg`}>{exp.company}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-${exp.color}-400 to-${exp.color}-600 rounded-full border-4 border-navy-900 shadow-lg`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section id="certifications" className="py-20 bg-navy-950/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card border border-white/10 hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-navy-900">
                      {cert.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="glass-card border border-white/10 hover:border-purple-400/50 transition-all duration-500 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-400 group-hover:text-pink-400 transition-colors">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a href="mailto:kemidikarthik2004@gmail.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                        kemidikarthik2004@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <a href="tel:+919515513353" className="text-gray-300 hover:text-emerald-400 transition-colors">
                        +91 9515513353
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-gray-300">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-300 mb-4">Let's connect on social media:</p>
                  <div className="flex gap-4">
                    <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-blue-500/25">
                      <a href="https://www.linkedin.com/in/karthik-kemidi-b4924a25a/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button asChild size="sm" className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-gray-500/25">
                      <a href="https://github.com/karthikkemidi" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 group-hover:text-blue-400 transition-colors">Send a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-navy-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-colors hover:border-white/40"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-navy-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-colors hover:border-white/40"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-navy-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-colors resize-none hover:border-white/40"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 border-t border-white/10 bg-navy-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Karthik Kemidi. Built with passion for technology and innovation.
          </p>
          <div className="flex justify-center items-center space-x-2">
            <span className="text-sm text-gray-500">Made with</span>
            <span className="text-red-400 animate-pulse">❤️</span>
            <span className="text-sm text-gray-500">and lots of</span>
            <span className="text-cyan-400">☕</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
