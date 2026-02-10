import { Link } from "react-router-dom";
import { 
  Award, 
  Shield, 
  Users, 
  Briefcase, 
  Clock, 
  Snowflake,
  ChevronRight,
  Sparkles
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClayCard from "@/components/ui/ClayCard";
import ClayButton from "@/components/ui/ClayButton";
import ClayBadge from "@/components/ui/ClayBadge";

const features = [
  { icon: Shield, title: "ISO Certified", description: "Quality assured education" },
  { icon: Users, title: "Experienced Faculty", description: "Expert instructors" },
  { icon: Briefcase, title: "Job Oriented Programs", description: "Industry-ready skills" },
  { icon: Clock, title: "Flexible Courses", description: "Short & long term options" },
  { icon: Snowflake, title: "AC Classrooms", description: "Comfortable learning" },
];

const courseImages = [
  { url: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=300&fit=crop", label: "Computer Lab (DCA/PGDCA)" },
  { url: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop", label: "Python Programming" },
  { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop", label: "Java Development" },
  { url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop", label: "Tally & Accounting" },
  { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", label: "Data Analytics" },
  { url: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop", label: "Digital Marketing" },
  { url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop", label: "MS Office" },
  { url: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop", label: "Web Design" },
  { url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop", label: "Artificial Intelligence" },
  { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop", label: "School Computer Education" },
];
const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
          
          {/* Main Hero Card */}
          <ClayCard className="max-w-4xl mx-auto p-8 md:p-12 text-center" hover={false}>
            {/* Certification Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <ClayBadge variant="gold" icon={<Shield className="w-4 h-4" />}>
                ISO 9001:2015 Certified
              </ClayBadge>
              <ClayBadge variant="gold" icon={<Award className="w-4 h-4" />}>
                Govt. of India (MSME)
              </ClayBadge>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
              NextCareer
              <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mt-2">
                Computer Education
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              <Sparkles className="inline w-5 h-5 text-accent mr-2" />
              Simplify Your Life With Us
            </p>

            {/* Description */}
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Empowering students with industry-ready computer skills. From basic 
              office applications to advanced programming and AI courses — we prepare 
              you for the digital future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/courses">
                <ClayButton variant="accent" size="lg">
                  Explore Courses
                  <ChevronRight className="w-5 h-5 ml-2 inline" />
                </ClayButton>
              </Link>
              <Link to="/contact">
                <ClayButton variant="secondary" size="lg">
                  Contact Us
                </ClayButton>
              </Link>
            </div>
          </ClayCard>
        </div>
      </section>

      {/* Courses Marquee Section */}
      <section className="py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Our Courses in Action
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto px-4">
          Explore the wide range of skills our students learn every day.
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track flex gap-6 w-max">
            {[...courseImages, ...courseImages].map((img, i) => (
              <div key={i} className="clay-card flex-shrink-0 w-52 p-3 text-center">
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-36 object-cover rounded-2xl mb-3"
                  loading="lazy"
                />
                <p className="text-sm font-medium text-foreground">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Why Choose Us?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We provide quality education with modern facilities and experienced faculty 
          to help you succeed in your career.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 stagger-children">
          {features.map((feature, index) => (
            <ClayCard key={index} className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-teal flex items-center justify-center float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </ClayCard>
          ))}
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <ClayCard className="gradient-teal p-8 md:p-12" hover={false}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "1000+", label: "Students Trained" },
              { number: "15+", label: "Courses Offered" },
              { number: "95%", label: "Placement Rate" },
            ].map((stat, index) => (
              <div key={index} className="bounce-soft" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ClayCard>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <ClayCard className="text-center p-8 md:p-12" hover={false}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of successful students who have transformed their careers 
            with our comprehensive computer education programs.
          </p>
          <Link to="/contact">
            <ClayButton variant="accent" size="lg">
              Join Now
              <ChevronRight className="w-5 h-5 ml-2 inline" />
            </ClayButton>
          </Link>
        </ClayCard>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
