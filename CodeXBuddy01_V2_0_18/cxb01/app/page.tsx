import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  Leaf,
  BookOpen,
  Dumbbell,
  Briefcase,
  ArrowRight,
  Code,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Star,
  CheckCircle,
  Zap,
  Target,
  Smartphone,
  Search,
  ShoppingCart,
  Palette,
  TrendingUp,
  Menu,
  Users,
  Award,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 items-center text-lg sm:text-xl font-bold text-blue-600">
            <div className="p-1.5 sm:p-2 bg-blue-600 rounded-lg">
              <Code className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:underline"
            >
              CodeXBuddy01
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#home"
              className="transition-colors hover:text-blue-600 text-gray-700"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="transition-colors hover:text-blue-600 text-gray-700"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-blue-600 text-gray-700"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="transition-colors hover:text-blue-600 text-gray-700"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-blue-600 text-gray-700"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/7087964596?text=Hey%20Team%20CodeXBuddy01%2C%20I%20want%20to%20start%20my%20startup%20journey%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 lg:px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
            >
              🚀 Get Started
            </a>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-8 bg-gradient-to-br from-blue-50 via-white to-purple-50"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium mx-auto lg:mx-0 w-fit">
                    🚀 Empowering Startups Since 2024
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                    Transform Your{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Startup Vision
                    </span>{" "}
                    Into Reality
                  </h1>
                  <p className="max-w-2xl text-gray-600 text-lg md:text-xl leading-relaxed mx-auto lg:mx-0">
                    I help startups build powerful digital solutions that drive
                    growth, attract investors, and scale rapidly. From MVP to
                    market leader - let's build your success story together.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                  {/* Start Your Project → Scroll to #contact */}
                  <Link
                    href="#contact"
                    scroll={true}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>

                  {/* View Project → Scroll to #projects */}
                  <Link
                    href="#projects"
                    scroll={true}
                    className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg text-center"
                  >
                    View Project
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                      10+ Happy Startups
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-sm text-gray-600 font-medium ml-1">
                      5.0 Rating
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative w-full max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl transform -rotate-3 opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl p-8 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Code className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Startup Success
                      </h3>
                      <p className="text-gray-600">Building the Future</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2 text-sm font-medium">
                💼 Our Services
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Complete Digital Solutions for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Startups
                </span>
              </h2>
              <p className="max-w-4xl text-gray-600 text-lg md:text-xl leading-relaxed">
                From concept to launch, I provide end-to-end digital services
                that help startups succeed in today's competitive market.
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                {
                  icon: Globe,
                  title: "Web Development",
                  description:
                    "Custom web applications built with cutting-edge technologies like Next.js, React, and Node.js.",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  description:
                    "Beautiful, intuitive interfaces that enhance user experience and drive conversions.",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Search,
                  title: "SEO Optimization",
                  description:
                    "Boost your online visibility and rank higher on search engines to attract more customers.",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: TrendingUp,
                  title: "Digital Marketing",
                  description:
                    "Strategic marketing campaigns to increase brand awareness and drive business growth.",
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: ShoppingCart,
                  title: "E-commerce Solutions",
                  description:
                    "Complete online stores with payment integration, inventory management, and analytics.",
                  color: "from-indigo-500 to-purple-500",
                },
                {
                  icon: Smartphone,
                  title: "Mobile App Development",
                  description:
                    "Native and cross-platform mobile apps that engage users and drive business results.",
                  color: "from-teal-500 to-blue-500",
                },
                {
                  icon: Target,
                  title: "Brand Identity",
                  description:
                    "Create a memorable brand identity that resonates with your target audience.",
                  color: "from-pink-500 to-rose-500",
                },
                {
                  icon: Zap,
                  title: "MVP Development",
                  description:
                    "Rapid prototyping and MVP development to validate your startup idea quickly.",
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2 text-sm font-medium">
                🎯 Success Stories
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Startups I've Helped{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Scale
                </span>
              </h2>
              <p className="max-w-4xl text-gray-600 text-lg md:text-xl leading-relaxed">
                From idea to IPO-ready - see how I've helped startups build
                products that users love and investors fund.
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "EdTech Platform",
                  category: "Education",
                  color: "from-blue-500 to-purple-500",
                  metrics: "Live Now",
                  description:
                    "An interactive learning platform designed for modern students and educators. Features real-time content delivery and analytics.",
                  link: "https://projectpalacebazaar.vercel.app",
                  icon: Code,
                },
                {
                  name: "FundMyCup",
                  category: "Crowdfunding",
                  color: "from-pink-500 to-red-500",
                  metrics: "Active",
                  description:
                    "A fundraising platform built to support creative ideas and startups with easy donations and campaign creation.",
                  link: "https://fundmycup.vercel.app/",
                  icon: DollarSign,
                },
                {
                  name: "2ndHand eBook Store",
                  category: "Marketplace",
                  color: "from-green-500 to-teal-500",
                  metrics: "Coming Soon",
                  description:
                    "A book trading platform where users can buy and sell used books easily with great UI and fast search.",
                  link: "https://book-cart-2025.vercel.app/",
                  icon: BookOpen,
                },
                {
                  name: "CXB01 Gym",
                  category: "Fitness",
                  color: "from-yellow-500 to-orange-500",
                  metrics: "Launched",
                  description:
                    "Landing page for a modern fitness brand offering customized training plans and membership management.",
                  link: "https://cxb01gym.vercel.app/",
                  icon: Dumbbell,
                },
                {
                  name: "Startup Landing",
                  category: "Company",
                  color: "from-indigo-500 to-cyan-500",
                  metrics: "Published",
                  description:
                    "Professional landing page for startups to attract investors and showcase vision, mission and services.",
                  link: "https://codexbuddy01-beta-version.vercel.app/",
                  icon: Briefcase,
                },
                {
                  name: "Crop Yield Prediction",
                  category: "AgriTech",
                  metrics: "AI Model",
                  description:
                    "A machine learning-based platform that predicts crop yield based on state, season, and crop inputs. Built using Flask, scikit-learn, and deployed on Render.",
                  link: "https://india-based-crop-prediction.onrender.com/",
                  color: "from-green-500 to-lime-500",
                  icon: Leaf, // If you're using Lucide or Heroicons, import `Leaf` icon
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white"
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10`}
                    ></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div
                        className={`p-6 rounded-full bg-gradient-to-r ${project.color}`}
                      >
                        <project.icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 font-semibold">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {project.name}
                        </h3>
                        <Badge className="bg-green-100 text-green-700 text-xs whitespace-nowrap">
                          {project.metrics}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center pt-2">
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-300"
                        >
                          Live Demo <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-xs text-gray-500">
                            Launched
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium mx-auto lg:mx-0 w-fit">
                    👨‍💻 Meet the Founder
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Rakesh Kumar
                    </span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A passionate full-stack developer and startup enthusiast
                    with over 2+ years of experience helping startups transform
                    their ideas into successful digital products.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Why Startups Choose Me
                  </h3>
                  <div className="space-y-3">
                    {[
                      "🚀 Rapid MVP development to validate ideas quickly",
                      "💡 Strategic technical guidance for scaling",
                      "🎯 Focus on user experience and business goals",
                      "⚡ Agile development process with quick iterations",
                      "📈 Post-launch support and optimization",
                    ].map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-left"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">18+</div>
                    <div className="text-sm text-gray-600">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      100+
                    </div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl transform -rotate-6 opacity-20"></div>
                  <Card className="relative border-0 shadow-2xl bg-white p-8">
                    <CardContent className="p-0 text-center space-y-6">
                      <div className="relative w-32 h-32 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                          <span className="text-3xl font-bold text-blue-600">
                            <Image
                              src="/photo.jpg" // इसे अपने actual फोटो path से बदलें
                              alt="Your Profile"
                              fill
                              className="object-cover rounded-full"
                            />
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Rakesh Kumar
                        </h3>
                        <p className="text-blue-600 font-semibold">
                          Founder & Full-Stack Developer
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Building the future, one startup at a time
                        </p>
                      </div>
                      <div className="flex justify-center gap-4">
                        {[
                          { icon: "💼", label: "LinkedIn" },
                          { icon: "🐙", label: "GitHub" },
                          { icon: "🐦", label: "Twitter" },
                        ].map((social, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="rounded-full"
                          >
                            {social.icon}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2 text-sm font-medium">
                📞 Let's Connect
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Ready to Build Your{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Startup?
                </span>
              </h2>
              <p className="max-w-4xl text-gray-600 text-lg md:text-xl leading-relaxed">
                Let's discuss your idea and create a roadmap to turn it into a
                successful business. I'm here to help you every step of the way.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Me a Message
                  </h3>
                  <form
                    action="https://formspree.io/f/myzjgadw" // Replace with your own Formspree endpoint
                    method="POST"
                    className="space-y-6"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          className="flex h-12 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="flex h-12 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Project Type
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="flex h-12 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <option>MVP Development</option>
                        <option>Web Application</option>
                        <option>Mobile App</option>
                        <option>E-commerce Store</option>
                        <option>UI/UX Design</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Tell me about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className="flex min-h-[120px] w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                        placeholder="Describe your startup idea, goals, and timeline..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl"
                    >
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <p className="text-gray-600">codexbuddy01@gmail.com</p>
                      <p className="text-sm text-gray-500">
                        I'll respond within 24 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 6284039556</p>
                      <p className="text-sm text-gray-500">
                        Available Mon-Fri, 9 AM - 6 PM IST
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">+91 7087964596</p>
                      <p className="text-sm text-gray-500">
                        Quick responses for urgent queries
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-6 text-center space-y-4">
                    <h3 className="font-bold text-xl">Ready to Start?</h3>
                    <p className="text-blue-100">
                      Book a free 30-minute consultation to discuss your startup
                      idea
                    </p>
                    <Link
                      href="https://wa.me/917087964596?text=Hey%20CodeXBuddy01%2C%20I%27d%20like%20to%20schedule%20a%20startup%20consultation%20call."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg">
                        Schedule Call
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
            {/* Company */}
            <div className="space-y-4 text-center sm:text-left">
              <div className="flex gap-2 items-center text-xl font-bold justify-center sm:justify-start">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <Link
                  href="/"
                  className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:underline"
                >
                  CodeXBuddy01
                </Link>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering startups with cutting-edge digital solutions. From
                idea to IPO-ready.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="font-bold">Services</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Web Development</div>
                <div>UI/UX Design</div>
                <div>Mobile Apps</div>
                <div>SEO & Marketing</div>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="font-bold">Company</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="#about" className="block hover:text-white">
                  About
                </Link>
                <Link href="#projects" className="block hover:text-white">
                  Projects
                </Link>
                <Link href="#contact" className="block hover:text-white">
                  Contact
                </Link>
                <Link href="#services" className="block hover:text-white">
                  Services
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="font-bold">Connect</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <a
                  href="https://www.linkedin.com/company/codexbuddy01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/codexbuddy01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/codexbuddy01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white"
                >
                  Twitter
                </a>
                <a
                  href="https://wa.me/917087964596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="font-bold">Social</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <a
                  href="https://instagram.com/codexbuddy01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white block"
                >
                  Instagram
                </a>
                <a
                  href="https://www.threads.net/@codexbuddy01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white block"
                >
                  Threads
                </a>
                <a
                  href="https://twitter.com/codexbuddy01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white block"
                >
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/company/codexbuddy01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white block"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} CodeXBuddy01. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-400 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}