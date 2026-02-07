import { FileText, ChevronDown } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClayCard from "@/components/ui/ClayCard";
import ClayBadge from "@/components/ui/ClayBadge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const termsCategories = [
  {
    title: "Admission Policy",
    content: [
      "Admission is open to all candidates regardless of age, gender, or educational background unless specified for particular courses.",
      "Candidates must complete the admission form and submit required documents including ID proof and photographs.",
      "Admission confirmation is subject to availability of seats and payment of applicable fees.",
      "The institute reserves the right to refuse admission without providing reasons.",
    ],
  },
  {
    title: "Fees & Payments",
    content: [
      "Course fees must be paid in full at the time of admission unless an installment plan is approved.",
      "Fees are non-transferable to other courses or individuals.",
      "All payments must be made through approved payment methods (cash, bank transfer, or online payment).",
      "Fee structure may be revised periodically; enrolled students will continue with their original fee structure.",
      "Late payment may attract additional charges as per institute policy.",
    ],
  },
  {
    title: "Attendance Policy",
    content: [
      "Students are required to maintain a minimum of 75% attendance to be eligible for certification.",
      "Attendance is recorded at the beginning of each class session.",
      "Three consecutive absences without prior notice may result in discontinuation from the course.",
      "Make-up classes may be provided for genuine absences at the discretion of the institute.",
    ],
  },
  {
    title: "Code of Conduct",
    content: [
      "Students must behave respectfully towards faculty, staff, and fellow students at all times.",
      "Any form of harassment, discrimination, or disruptive behavior is strictly prohibited.",
      "Use of mobile phones during class hours is not permitted without instructor permission.",
      "Damage to institute property will result in penalty and may lead to dismissal.",
      "Sharing of course materials or resources outside the institute is prohibited.",
    ],
  },
  {
    title: "Certification Policy",
    content: [
      "Certificates are issued only upon successful completion of the course and required assessments.",
      "Students must clear all pending dues before certificate issuance.",
      "Certificate collection must be done within 30 days of course completion; otherwise, re-issue charges may apply.",
      "The institute provides ISO 9001:2015 and MSME recognized certifications.",
      "Duplicate certificates can be issued upon request with applicable charges.",
    ],
  },
  {
    title: "Refund Policy",
    content: [
      "Refund requests must be submitted within 7 days of enrollment.",
      "Refunds are subject to deduction of registration fees and any utilized session charges.",
      "No refunds will be processed after 7 days or once the student has attended more than 3 sessions.",
      "Refund processing may take 15-30 working days from approval.",
      "Course transfers to family members may be considered as an alternative to refunds.",
    ],
  },
];

const Terms = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ClayBadge variant="teal" icon={<FileText className="w-4 h-4" />} className="mb-6">
            Legal
          </ClayBadge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Please read these terms and conditions carefully before enrolling in 
            any of our courses. By enrolling, you agree to abide by these policies.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto space-y-4">
          {termsCategories.map((category, index) => (
            <Collapsible
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
            >
              <ClayCard className="p-0 overflow-hidden" hover={false}>
                <CollapsibleTrigger className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors">
                  <span className="font-heading font-semibold text-lg text-foreground">
                    {category.title}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 pt-2">
                    <ul className="space-y-3">
                      {category.content.map((item, itemIndex) => (
                        <li 
                          key={itemIndex} 
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </ClayCard>
            </Collapsible>
          ))}
        </div>
      </section>

      {/* Last Updated Notice */}
      <section className="container mx-auto px-4 pb-16">
        <ClayCard className="max-w-3xl mx-auto p-6 text-center bg-secondary/50" hover={false}>
          <p className="text-sm text-muted-foreground">
            Last updated: January 2024. The institute reserves the right to modify 
            these terms and conditions at any time. Students will be notified of 
            significant changes.
          </p>
        </ClayCard>
      </section>

      {/* Contact Notice */}
      <section className="container mx-auto px-4 pb-16">
        <ClayCard className="max-w-3xl mx-auto gradient-teal p-8 text-center" hover={false}>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-primary-foreground/90 mb-2">
            If you have any questions about our terms and conditions, please contact us:
          </p>
          <p className="text-primary-foreground font-medium">
            📧 nextcareer9@gmail.com | 📞 +91 9441871863
          </p>
        </ClayCard>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
