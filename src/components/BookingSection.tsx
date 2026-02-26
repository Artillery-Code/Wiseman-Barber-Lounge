import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>

          <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">
            Reserve Your Spot
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Book an Appointment
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-foreground/60 font-body max-w-xl mx-auto mb-10">
            Schedule your visit today and experience premium grooming at Wisemen
            Barbershop.
          </p>

          <a
            href="https://wbl.bookedby.com/search-list-view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors mb-6 font-bold">

            Book Appointment
          </a>

          <div className="flex items-center justify-center gap-2 text-foreground/50 font-body text-sm">
            <Phone className="w-4 h-4 text-gold" />
            <span>Call us to schedule your appointment</span>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default BookingSection;