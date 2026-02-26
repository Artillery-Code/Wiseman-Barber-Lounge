import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
{ day: "Monday", time: "8:00 AM - 10:00 PM" },
{ day: "Tuesday", time: "8:00 AM - 10:00 PM" },
{ day: "Wednesday", time: "8:00 AM - 10:00 PM" },
{ day: "Thursday", time: "8:00 AM - 10:00 PM" },
{ day: "Friday", time: "8:00 AM - 10:00 PM" },
{ day: "Saturday", time: "8:00 AM - 10:00 PM" },
{ day: "Sunday", time: "Closed" }];


const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Contact & Location
          </h2>
          <div className="gold-divider mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center">

            <MapPin className="w-7 h-7 text-gold mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-3">Address</h3>
            <p className="text-foreground/60 font-body">12932 LaGrange Rd, Palos Park, IL 60464</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center">

            <Phone className="w-7 h-7 text-gold mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-3">Phone</h3>
            <a
              href="tel:+17082629636"
              className="text-foreground/60 font-body hover:text-gold transition-colors">(708) 608-8166


            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center">

            <Clock className="w-7 h-7 text-gold mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-3">
              Business Hours
            </h3>
            <div className="space-y-1">
              {hours.map((h) =>
              <div
                key={h.day}
                className="flex justify-between text-sm font-body max-w-[220px] mx-auto">

                  <span className="text-foreground/70">{h.day}</span>
                  <span className="text-foreground/50">{h.time}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default ContactSection;