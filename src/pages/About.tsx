import { GraduationCap, Award, Target, Heart, Users, Lightbulb } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClayCard from "@/components/ui/ClayCard";
import ClayBadge from "@/components/ui/ClayBadge";

import saikumarImage from "@/assets/team/saikumar.jpg";
import satyasriImage from "@/assets/team/satyasri.jpg";

const teamMembers = [
  {
    name: "G. Saikumar",
    role: "Chairman & Trainer",
    qualification: "M.Tech (Computer Science & Engineering)",
    experience: "10+ Years Experience",
    image: saikumarImage,
    color: "gradient-teal",
  },
  {
    name: "G. R. Satya Sri",
    role: "Director & Trainer",
    qualification: "MBA",
    experience: "Expert in Management",
    image: satyasriImage,
    color: "gradient-orange",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every aspect of education we provide.",
  },
  {
    icon: Heart,
    title: "Student-Centric",
    description: "Every decision we make puts our students' success first.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously update our curriculum with the latest technologies.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive learning community for lifelong connections.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ClayBadge variant="teal" icon={<GraduationCap className="w-4 h-4" />} className="mb-6">
            About Us
          </ClayBadge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story & Mission
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Since our inception, NextCareer Computer Education has been dedicated to 
            providing quality computer education that transforms lives and careers.
          </p>
        </div>

        {/* Story Card */}
        <ClayCard className="max-w-4xl mx-auto p-8 md:p-12" hover={false}>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="text-primary font-semibold text-xl">NextCareer Computer Education</span> was 
              founded with a vision to bridge the gap between education and industry requirements. 
              Located in Tanuku, we have become a trusted name in computer education, recognized 
              by the Government of India (MSME) and certified with ISO 9001:2015.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our institute offers a wide range of courses from basic computer applications to 
              advanced programming languages like Python and Java, as well as cutting-edge AI 
              courses. We believe in practical, hands-on learning that prepares students for 
              real-world challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With experienced faculty members who bring years of industry experience, we ensure 
              that every student receives personalized attention and guidance throughout their 
              learning journey. Our modern, air-conditioned classrooms provide a comfortable 
              environment for focused learning.
            </p>
          </div>

          {/* Certification Badges */}
          <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-border">
            <ClayBadge variant="gold" icon={<Award className="w-4 h-4" />}>
              ISO 9001:2015 Certified
            </ClayBadge>
            <ClayBadge variant="gold" icon={<Award className="w-4 h-4" />}>
              Govt. of India (MSME) Recognized
            </ClayBadge>
          </div>
        </ClayCard>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our experienced leadership team brings decades of combined expertise in 
            education and industry to guide your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <ClayCard key={index} className="p-6 text-center float-animation" style={{ animationDelay: `${index * 0.3}s` }}>
              {/* Photo */}
              <div className="overflow-hidden rounded-2xl shadow-clay mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
              </div>

              {/* Info */}
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-accent font-semibold mb-4">
                {member.role}
              </p>
              <div className="space-y-2">
                <ClayBadge variant="teal" className="text-xs">
                  {member.qualification}
                </ClayBadge>
                <p className="text-sm text-muted-foreground">
                  {member.experience}
                </p>
              </div>
            </ClayCard>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do at NextCareer Computer Education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ClayCard key={index} className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-orange flex items-center justify-center bounce-soft" style={{ animationDelay: `${index * 0.2}s` }}>
                <value.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </ClayCard>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 py-16">
        <ClayCard className="gradient-teal p-8 md:p-12 text-center" hover={false}>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            "To empower every student with the knowledge, skills, and confidence 
            to succeed in the ever-evolving digital world, making quality computer 
            education accessible to all."
          </p>
        </ClayCard>
      </section>

      <Footer />
    </div>
  );
};

export default About;
