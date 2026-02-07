import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram,
  Award,
  Shield
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">NextCareer</h3>
                <p className="text-xs opacity-80">Computer Education</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Simplify Your Life With Us. Empowering students with industry-ready 
              skills since 2014.
            </p>
            {/* Certification Badges */}
            <div className="flex gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary-foreground/10">
                <Shield className="w-4 h-4 text-clay-gold" />
                <span className="text-xs font-medium">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary-foreground/10">
                <Award className="w-4 h-4 text-clay-gold" />
                <span className="text-xs font-medium">MSME</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Learning Platform", path: "/learning" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Popular Courses</h4>
            <nav className="flex flex-col gap-2">
              {[
                "Python Programming",
                "Java Development",
                "Data Analyst",
                "Digital Marketing",
                "Web Designing",
                "AI Courses",
              ].map((course) => (
                <Link
                  key={course}
                  to="/courses"
                  className="text-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                >
                  {course}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+919441871863" 
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                +91 9441871863
              </a>
              <a 
                href="mailto:nextcareer9@gmail.com" 
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                nextcareer9@gmail.com
              </a>
              <a 
                href="https://instagram.com/nextcareer_education" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                @nextcareer_education
              </a>
              <div className="flex items-center gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4" />
                Tanuku, Andhra Pradesh
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} NextCareer Computer Education. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="text-sm opacity-70 hover:opacity-100">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="text-sm opacity-70 hover:opacity-100">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
