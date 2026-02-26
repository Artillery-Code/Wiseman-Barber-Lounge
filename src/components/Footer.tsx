import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Scissors className="w-5 h-5 text-gold mx-auto mb-4 opacity-60" />
        <p className="font-display text-gold text-sm mb-2">Wisemen Barbershop</p>
        <p className="text-xs text-foreground/40 font-body">
          © {new Date().getFullYear()} Wisemen Barbershop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
