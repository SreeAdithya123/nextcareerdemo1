import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Learning", path: "/learning" },
  { name: "Terms", path: "/terms" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="clay-card mx-4 mt-4 px-6 py-4 md:mx-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl gradient-teal flex items-center justify-center shadow-clay transition-transform group-hover:scale-105">
              <GraduationCap className="w-7 h-7 text-accent-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-lg text-primary leading-tight">
                NextCareer
              </h1>
              <p className="text-xs text-muted-foreground">Computer Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground shadow-clay"
                    : "text-foreground hover:bg-secondary hover:shadow-clay"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className="hidden lg:flex clay-button gradient-orange text-accent-foreground text-sm"
          >
            Join Now
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden clay-button p-3 bg-secondary"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full p-6">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
                  <div className="w-12 h-12 rounded-2xl gradient-teal flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-lg text-primary">
                      NextCareer
                    </h2>
                    <p className="text-xs text-muted-foreground">Computer Education</p>
                  </div>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-5 py-4 rounded-2xl text-base font-medium transition-all ${
                        isActive(link.path)
                          ? "bg-primary text-primary-foreground shadow-clay"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="clay-button gradient-orange text-accent-foreground text-center mt-6"
                >
                  Join Now
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
