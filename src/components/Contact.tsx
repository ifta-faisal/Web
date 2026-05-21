import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formDataToSubmit = new FormData(form);
    formDataToSubmit.append("access_key", "b658eaef-4208-4192-9479-0cf129ab75bd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "United International University",
        "United City, Madani Ave 100ft",
        "Dhaka, Bangladesh",
      ],
      color: "from-primary to-[#ea580c]",
      link: "https://maps.app.goo.gl/GYa86SyjURtjzo6S7?g_st=aw",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["aerialrobotics@project.uiu.ac.bd"],
      color: "from-primary to-accent",
      link: "mailto:aerialrobotics@project.uiu.ac.bd",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+880 1521-461598"],
      color: "from-[#ea580c] to-primary",
      link: "tel:+8801521461598",
    },
  ];

  return (
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-transparent relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="section-label mb-3">Get In Touch</div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <div className="mask-container">
              <span className="mask-reveal ju-visible">Let's Create Extraordinary</span>
            </div>
          </h2>
          <p className="ju-reveal text-sm sm:text-lg text-slate-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Whether you want to collaborate on innovative aerial robotics projects, explore partnership opportunities, or simply say hello—we're here and excited to hear from you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#ea580c]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="card-modern rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition transform`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p
                      key={i}
                      className="ju-reveal text-slate-300 text-sm sm:text-base leading-relaxed mb-1 sm:mb-2 flex-grow"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-[#ea580c]/30 to-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="card-modern rounded-3xl p-6 sm:p-10 md:p-14">
              <h3 className="ju-reveal text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Send Us a Message
              </h3>
              <p className="ju-reveal text-sm sm:text-base text-slate-300 mb-6 sm:mb-10">
                We'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4 sm:mb-6 animate-pulse">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="ju-reveal text-sm sm:text-base text-slate-300 text-center">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm sm:text-base font-semibold text-slate-200 mb-2 sm:mb-3"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name here"
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-600/50 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary/80 focus:ring-2 focus:ring-primary/30 transition"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm sm:text-base font-semibold text-slate-200 mb-2 sm:mb-3"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-600/50 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary/80 focus:ring-2 focus:ring-primary/30 transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm sm:text-base font-semibold text-slate-200 mb-2 sm:mb-3"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-600/50 border border-slate-500/50 rounded-xl text-white focus:outline-none focus:border-primary/80 focus:ring-2 focus:ring-primary/30 transition appearance-none"
                      required
                    >
                      <option value="" className="bg-surface">
                        Select a subject
                      </option>
                      <option value="join" className="bg-surface">
                        Join the Team
                      </option>
                      <option value="collaboration" className="bg-surface">
                        University Collaboration
                      </option>
                      <option value="sponsorship" className="bg-surface">
                        Sponsorship Opportunities
                      </option>
                      <option value="media" className="bg-surface">
                        Media Inquiry
                      </option>
                      <option value="general" className="bg-surface">
                        General Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm sm:text-base font-semibold text-slate-200 mb-2 sm:mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, inquiry, or collaboration idea..."
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-600/50 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary/80 focus:ring-2 focus:ring-primary/30 transition resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
