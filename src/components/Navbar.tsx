import { useState, useEffect } from "react";
import { Scissors, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Scissors className="w-5 h-5 text-gold" />
          <span className="font-display text-lg text-gold tracking-wide">
            Wisemen Barber Lounge
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-body tracking-widest text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wise.bookedby.com/search-list-view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-body tracking-widest bg-primary text-primary-foreground hover:bg-gold-dark transition-colors"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-body tracking-widest text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wise.bookedby.com/search-list-view"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-2 text-sm font-body tracking-widest bg-primary text-primary-foreground"
          >
            BOOK NOW
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
