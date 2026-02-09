import { Clock, Globe, Users, Monitor, BookOpen, Award, Quote } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClayCard from "@/components/ui/ClayCard";
import ClayBadge from "@/components/ui/ClayBadge";
import studentSupportImg from "@/assets/student-support.png";
const features = [
  {
    icon: Clock,
    title: "Flexible Classes",
    description: "Morning, evening, and weekend batches available to fit your schedule.",
    color: "gradient-teal",
  },
  {
    icon: Globe,
    title: "Learn From Anywhere",
    description: "Access study materials and resources online, supplement your in-class learning.",
    color: "gradient-orange",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Learn from industry experts with years of practical experience.",
    color: "gradient-teal",
  },
  {
    icon: Monitor,
    title: "Hands-on Practice",
    description: "Practical labs with modern computers for real-world skill development.",
    color: "gradient-orange",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Materials",
    description: "Well-structured study materials and practice exercises for effective learning.",
    color: "gradient-teal",
  },
  {
    icon: Award,
    title: "Recognized Certification",
    description: "ISO certified courses with government recognized certifications upon completion.",
    color: "gradient-orange",
  },
];

const Learning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ClayBadge variant="teal" icon={<Monitor className="w-4 h-4" />} className="mb-6">
            Learning Platform
          </ClayBadge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We Teach
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our learning approach combines theoretical knowledge with practical 
            application, ensuring you're industry-ready from day one.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {features.map((feature, index) => (
            <ClayCard key={index} className="p-8">
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 float-animation`} style={{ animationDelay: `${index * 0.15}s` }}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </ClayCard>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 py-16">
        <ClayCard className="max-w-4xl mx-auto p-8 md:p-12 text-center relative overflow-visible" hover={false}>
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 rounded-full gradient-orange flex items-center justify-center shadow-clay">
              <Quote className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>

          <blockquote className="mt-4">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6 italic">
              "A great lecturer inspires students not just to learn — but to think, 
              explore, and create."
            </p>
            <footer className="text-muted-foreground">
              — Our Teaching Philosophy
            </footer>
          </blockquote>
        </ClayCard>
      </section>

      {/* Learning Path Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Learning Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From enrollment to certification — here's how we guide you through your learning journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {/* Timeline Items */}
            {[
              { step: "01", title: "Counseling & Enrollment", description: "Personalized guidance to choose the right course based on your goals." },
              { step: "02", title: "Foundation Building", description: "Start with core concepts and fundamentals of your chosen course." },
              { step: "03", title: "Hands-on Practice", description: "Apply what you learn through practical projects and exercises." },
              { step: "04", title: "Advanced Concepts", description: "Progress to advanced topics and real-world applications." },
              { step: "05", title: "Certification & Placement", description: "Complete your course, get certified, and receive placement support." },
            ].map((item, index) => (
              <div key={index} className={`relative flex items-center gap-6 mb-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Step Circle */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full gradient-teal flex items-center justify-center text-xs font-bold text-primary-foreground -translate-x-1/2 z-10 shadow-clay">
                  {item.step}
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 1 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <ClayCard className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </ClayCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Section */}
      <section className="container mx-auto px-4 py-16">
        <ClayCard className="gradient-teal p-8 md:p-12" hover={false}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-primary-foreground">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Student Support
              </h2>
              <p className="opacity-90 leading-relaxed mb-6">
                We're with you every step of the way. From doubt-clearing sessions 
                to career guidance, our support extends beyond the classroom.
              </p>
              <ul className="space-y-3">
                {[
                  "One-on-one doubt clearing sessions",
                  "Access to study materials and resources",
                  "Regular progress assessments",
                  "Career counseling and placement support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 opacity-90">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <img 
                src={studentSupportImg} 
                alt="Student receiving support" 
                className="w-64 h-auto rounded-2xl shadow-clay mx-auto bounce-soft"
              />
            </div>
          </div>
        </ClayCard>
      </section>

      <Footer />
    </div>
  );
};

export default Learning;
