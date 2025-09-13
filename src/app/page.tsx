import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";

export default function Home() {
  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "TailwindCSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Prisma", category: "ORM" },
    { name: "Redux", category: "State Management" },
    { name: "Vite", category: "Build Tool" },
    { name: "Bootstrap", category: "Styling" },
  ];

  const projects = [
    {
      title: "Fyntrae",
      description:
        "Modern web application for tracking time, managing projects, tasks, clients, and billable rates designed for teams and organizations to streamline productivity and reporting.",
      tech: ["TypeScript", "React", "Next.js"],
      github: "https://github.com/Sujallukhi04/fyntrae",
      live: "#",
      featured: true,
    },
    {
      title: "Eduveo",
      description: "Educational platform built with modern web technologies.",
      tech: ["TypeScript", "React", "Next.js"],
      github: "https://github.com/Sujallukhi04/Eduveo",
      live: "#",
      featured: true,
    },
    {
      title: "Stream",
      description: "Streaming application with real-time capabilities.",
      tech: ["TypeScript", "React", "Node.js"],
      github: "https://github.com/Sujallukhi04/stream",
      live: "#",
      featured: false,
    },
    {
      title: "Workmate",
      description: "Collaborative workspace application for teams.",
      tech: ["JavaScript", "React", "Node.js"],
      github: "https://github.com/renishsuriya5291/workmate",
      live: "#",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Sujal Lukhi
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8 animate-fade-in">
              <Avatar className="h-32 w-32 border-4 border-white dark:border-slate-700 shadow-lg hover:scale-105 transition-transform duration-300">
                <AvatarImage
                  src="https://github.com/Sujallukhi04.png"
                  alt="Sujal Lukhi"
                />
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 animate-slide-up">
              Hi, I'm <span className="gradient-text">Sujal Lukhi</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              A passionate Full Stack Developer focused on building efficient,
              user-focused web solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-transform"
              >
                <Github className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 dark:border-slate-600 hover:scale-105 transition-transform"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              🎓 B.Tech in Information Technology at CHARUSAT (CGPA: 8.58/10)
              <br />
              🌱 Always learning and evolving through real-world coding
              challenges
              <br />
              🧠 Focused on strengthening problem-solving and algorithmic
              thinking
              <br />
              💡 Passionate about building efficient, user-focused web solutions
              <br />
              🚀 Committed to continuous growth, clean code, and impactful
              development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5 text-blue-600" />
                  Technical Skills
                </CardTitle>
                <CardDescription>
                  Technologies and tools I work with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="text-sm"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5 text-green-600" />
                  Tech Stack
                </CardTitle>
                <CardDescription>
                  My preferred development stack
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Frontend
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      React, Next.js, TypeScript, TailwindCSS, Redux
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Backend
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Node.js, Express, Prisma
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Database
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      MongoDB, PostgreSQL, MySQL
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                } hover:shadow-lg hover:scale-105 transition-all duration-300 group`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1 sm:flex-none"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild className="flex-1 sm:flex-none">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-300 dark:border-slate-600 hover:scale-105 transition-transform"
            >
              <a
                href="https://github.com/Sujallukhi04"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-300 dark:border-slate-600 hover:scale-105 transition-transform"
            >
              <a
                href="https://linkedin.com/in/sujal-lukhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-300 dark:border-slate-600 hover:scale-105 transition-transform"
            >
              <a href="mailto:sujal.lukhi@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>© 2024 Sujal Lukhi. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with Next.js, TypeScript, and TailwindCSS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
