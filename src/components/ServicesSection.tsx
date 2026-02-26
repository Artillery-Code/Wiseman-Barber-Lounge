import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

const services = [
  { name: "Wisemen Package", price: "$50", desc: "Haircut, beard trim, hot towel shave, and scalp massage", premium: true },
  { name: "Classic Haircut", price: "$35", desc: "Precision cut tailored to your style and face shape" },
  { name: "Kids/Senior/Service Member Haircut", price: "$30", desc: "Stylish cuts for young gentlemen, seniors, and service members" },
  { name: "Beard Trim", price: "$25", desc: "Professional beard grooming and styling with straight razor" },
  { name: "Straight Razor Shave", price: "$35", desc: "Traditional straight razor shave with hot towel treatment" },
  { name: "Wax", price: "$5", desc: "Clean finishing touch for brows, ears, or nose" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Our Services
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-foreground/60 font-body max-w-xl mx-auto">
            From classic cuts to luxury grooming packages, we offer a full range
            of services designed for the modern gentleman.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative p-6 border transition-colors ${
                s.premium
                  ? "border-gold bg-surface-light"
                  : "border-border bg-surface-dark"
              }`}
            >
              {s.premium && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 bg-gold text-background text-xs font-body font-bold tracking-widest uppercase rounded-sm">
                  <Scissors className="w-3 h-3" />
                  Premium
                </span>
              )}
              <div className="flex items-center justify-between mb-4">
                <Scissors className="w-6 h-6 text-gold/60" />
                <span className="font-display text-2xl text-gold">
                  {s.price}
                </span>
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{s.name}</h3>
              <p className="text-sm text-foreground/60 font-body">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
