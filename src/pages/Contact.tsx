import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Instagram,
  Send,
  PhoneCall
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClayCard from "@/components/ui/ClayCard";
import ClayButton from "@/components/ui/ClayButton";
import ClayBadge from "@/components/ui/ClayBadge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9441871863",
    href: "tel:+919441871863",
    color: "gradient-teal",
  },
  {
    icon: PhoneCall,
    label: "Landline",
    value: "+91 8819796205",
    href: "tel:+918819796205",
    color: "gradient-orange",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 7981516655",
    href: "https://wa.me/917981516655",
    color: "gradient-teal",
  },
  {
    icon: Mail,
    label: "Email",
    value: "nextcareer9@gmail.com",
    href: "mailto:nextcareer9@gmail.com",
    color: "gradient-orange",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@nextcareer_educations",
    href: "https://instagram.com/nextcareer_educations",
    color: "gradient-teal",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tanuku, Andhra Pradesh",
    href: "https://maps.google.com/?q=Tanuku",
    color: "gradient-orange",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual form only - no actual submission
    toast.success("Thank you for your enquiry! We will contact you soon.", {
      description: "Our team typically responds within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ClayBadge variant="teal" icon={<Phone className="w-4 h-4" />} className="mb-6">
            Contact Us
          </ClayBadge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our courses? Want to enroll? We're here to help! 
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 stagger-children">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <ClayCard className="p-6 h-full">
                <div className={`w-12 h-12 rounded-2xl ${contact.color} flex items-center justify-center mb-4 float-animation`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <contact.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {contact.label}
                </h3>
                <p className="text-accent font-medium">
                  {contact.value}
                </p>
              </ClayCard>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <ClayCard className="p-8" hover={false}>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
              Send an Enquiry
            </h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="clay-input"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="clay-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="clay-input"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-foreground mb-2">
                  Interested Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="clay-input w-full text-foreground"
                >
                  <option value="">Select a course</option>
                  <option value="dca">DCA - Diploma in Computer Applications</option>
                  <option value="pgdca">PGDCA - Post Graduate Diploma</option>
                  <option value="python">Python Programming</option>
                  <option value="java">Java Development</option>
                  <option value="tally">Tally ERP & GST</option>
                  <option value="data-analyst">Data Analytics</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="ms-office">MS Office</option>
                  <option value="web-designing">Web Designing</option>
                  <option value="ai">AI Courses</option>
                  <option value="school">School Special Classes</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements or any questions..."
                  className="clay-input min-h-[120px]"
                />
              </div>

              <ClayButton type="submit" variant="accent" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Enquire Now
              </ClayButton>
            </form>
          </ClayCard>

          {/* Map Placeholder & Quick Contact */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <ClayCard className="p-0 overflow-hidden h-64 lg:h-80" hover={false}>
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Visit Our Campus
                  </h3>
                  <p className="text-muted-foreground">
                    Tanuku, West Godavari District<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </ClayCard>

            {/* Quick Contact Card */}
            <ClayCard className="gradient-teal p-8" hover={false}>
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4">
                Quick Contact
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Prefer to talk directly? Give us a call or send a WhatsApp message 
                for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919441871863" className="flex-1">
                  <ClayButton variant="secondary" size="md" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </ClayButton>
                </a>
                <a href="https://wa.me/917981516655" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <ClayButton variant="secondary" size="md" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </ClayButton>
                </a>
              </div>
            </ClayCard>

            {/* Working Hours */}
            <ClayCard className="p-6" hover={false}>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Working Hours
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium text-foreground">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </ClayCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
