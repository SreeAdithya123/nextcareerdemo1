import { Link } from "react-router-dom";
import { 
  MonitorSmartphone, 
  Code, 
  Database,
  TrendingUp,
  Palette,
  Bot,
  FileSpreadsheet,
  GraduationCap,
  Laptop,
  BarChart3,
  Globe,
  BookOpen
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClayCard from "@/components/ui/ClayCard";
import ClayButton from "@/components/ui/ClayButton";
import ClayBadge from "@/components/ui/ClayBadge";

const courses = [
  {
    icon: Laptop,
    title: "DCA",
    fullName: "Diploma in Computer Applications",
    description: "Foundation course covering essential computer skills, MS Office, and basic programming.",
    duration: "6 Months",
    level: "Beginner",
  },
  {
    icon: MonitorSmartphone,
    title: "PGDCA",
    fullName: "Post Graduate Diploma in Computer Applications",
    description: "Advanced diploma covering programming, databases, and software development concepts.",
    duration: "1 Year",
    level: "Intermediate",
  },
  {
    icon: Code,
    title: "Python",
    fullName: "Python Programming",
    description: "Learn Python from basics to advanced concepts including data science and automation.",
    duration: "3-6 Months",
    level: "All Levels",
  },
  {
    icon: Database,
    title: "Java",
    fullName: "Java Development",
    description: "Complete Java programming from OOP concepts to enterprise application development.",
    duration: "4-6 Months",
    level: "Intermediate",
  },
  {
    icon: FileSpreadsheet,
    title: "Tally",
    fullName: "Tally ERP & GST",
    description: "Master accounting software, GST filing, inventory management, and financial reporting.",
    duration: "2-3 Months",
    level: "Beginner",
  },
  {
    icon: BarChart3,
    title: "Data Analyst",
    fullName: "Data Analytics",
    description: "Learn data analysis with Excel, SQL, Python, and visualization tools like Power BI.",
    duration: "4-6 Months",
    level: "Intermediate",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    fullName: "Digital Marketing",
    description: "Complete digital marketing including SEO, SEM, social media, and content marketing.",
    duration: "3 Months",
    level: "Beginner",
  },
  {
    icon: Globe,
    title: "MS Office",
    fullName: "Microsoft Office Suite",
    description: "Master Word, Excel, PowerPoint, and other essential productivity tools.",
    duration: "1-2 Months",
    level: "Beginner",
  },
  {
    icon: Palette,
    title: "Web Designing",
    fullName: "Web Design & Development",
    description: "Create stunning websites with HTML, CSS, JavaScript, and modern frameworks.",
    duration: "3-4 Months",
    level: "Beginner",
  },
  {
    icon: Bot,
    title: "AI Courses",
    fullName: "Artificial Intelligence",
    description: "Introduction to AI, machine learning basics, and practical AI applications.",
    duration: "4-6 Months",
    level: "Advanced",
  },
  {
    icon: BookOpen,
    title: "School Special Classes",
    fullName: "Computer Classes (Grade 1-10)",
    description: "Age-appropriate computer education covering basics to programming for school students.",
    duration: "Ongoing",
    level: "School",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ClayBadge variant="teal" icon={<GraduationCap className="w-4 h-4" />} className="mb-6">
            Our Courses
          </ClayBadge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Our Programs
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From foundational computer skills to advanced programming — we offer 
            comprehensive courses designed for every skill level and career goal.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {courses.map((course, index) => (
            <ClayCard key={index} className="p-6 flex flex-col h-full">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl gradient-teal flex items-center justify-center mb-4 float-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                <course.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {course.title}
                  </h3>
                  <ClayBadge 
                    variant={course.level === "Advanced" ? "orange" : course.level === "School" ? "gold" : "teal"} 
                    className="text-xs whitespace-nowrap"
                  >
                    {course.level}
                  </ClayBadge>
                </div>
                <p className="text-sm text-accent font-medium mb-3">
                  {course.fullName}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {course.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  ⏱ {course.duration}
                </span>
                <Link to="/contact">
                  <ClayButton variant="secondary" size="sm">
                    Enquire
                  </ClayButton>
                </Link>
              </div>
            </ClayCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <ClayCard className="gradient-orange p-8 md:p-12 text-center" hover={false}>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
            Not Sure Which Course to Choose?
          </h2>
          <p className="text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Our counselors are here to help you find the perfect course based on your 
            goals, background, and career aspirations. Get personalized guidance today!
          </p>
          <Link to="/contact">
            <ClayButton variant="secondary" size="lg">
              Get Free Counseling
            </ClayButton>
          </Link>
        </ClayCard>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
