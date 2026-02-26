import { motion } from "framer-motion";
import { Award, Gem, Heart, Clock } from "lucide-react";

const features = [
  { icon: Award, title: "Master Barbers", desc: "Skilled craftsmen with decades of combined experience" },
  { icon: Gem, title: "Premium Quality", desc: "Using only the finest grooming products and tools" },
  { icon: Heart, title: "Personalized Care", desc: "Every client receives individual attention and care" },
  { icon: Clock, title: "Timeless Service", desc: "Classic techniques with a modern touch" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            About Wisemen
          </h2>
          <div className="gold-divider mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6 text-foreground/70 font-body text-center mb-20"
        >
          <p>
            At Wisemen Barber Lounge, we believe a haircut is more than just a
            service — it's an experience. Our master barbers bring years of
            expertise and passion to every appointment, ensuring you leave
            looking and feeling your absolute best.
          </p>
          <p>
            From the moment you step through our doors, you're welcomed into a
            relaxing atmosphere. Every detail of our lounge has been thoughtfully
            designed to create a space where you can unwind and enjoy premium
            barbering services.
          </p>
          <p>
            Our commitment to excellence is unwavering. We use only the finest
            products, uphold the highest standards of hygiene, and remain
            dedicated to perfecting the timeless art of barbering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-6"
            >
              <f.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-display text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-foreground/60 font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
