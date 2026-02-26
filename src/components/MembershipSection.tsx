import { motion } from "framer-motion";
import { Crown, Check } from "lucide-react";

const perks = [
  "$5 off every monthly service signed up for",
  "10% off all products",
  "Complimentary clean-ups between cuts",
  "Priority booking",
  "Hassle-free check-out",
];

const MembershipSection = () => {
  return (
    <section className="py-24 bg-surface-dark">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">
            Exclusive Access
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Wisemen Membership
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-foreground/60 font-body max-w-2xl mx-auto">
            Memberships offer a seamless experience — your selected service is
            billed monthly on the 1st, eliminating per-visit payments and
            unlocking the exclusive perks listed below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-gold p-8 md:p-12 max-w-lg mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Crown className="w-5 h-5 text-gold" />
            <span className="text-sm font-body tracking-[0.3em] text-gold uppercase">
              Member Perks
            </span>
          </div>

          <ul className="space-y-4 mb-10">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground/80 font-body">{perk}</span>
              </li>
            ))}
          </ul>

          <p className="text-center text-xs font-body tracking-widest text-gold uppercase">
            Free Membership enrollment is completed in person
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
