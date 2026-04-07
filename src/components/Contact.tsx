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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
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
      color: "from-orange-600 to-yellow-500",
      link: "https://maps.app.goo.gl/GYa86SyjURtjzo6S7?g_st=aw",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["aerialrobotics@project.uiu.ac.bd"],
      color: "from-orange-600 to-red-500",
      link: "mailto:aerialrobotics@project.uiu.ac.bd",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+880 1521-461598"],
      color: "from-yellow-500 to-orange-500",
      link: "tel:+8801521461598",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-transparent relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block mb-2 sm:mb-4">
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-500/20 border border-orange-400/50 rounded-full text-orange-300 text-xs sm:text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Let's Create Something
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
              {" "}Extraordinary
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
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
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative bg-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 sm:p-8 hover:border-slate-500/80 transition duration-300 h-full flex flex-col">
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
                      className="text-slate-300 text-sm sm:text-base leading-relaxed mb-1 sm:mb-2 flex-grow"
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
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-yellow-600/30 to-orange-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-slate-700/40 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-6 sm:p-10 md:p-14">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Send Us a Message
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-10">
                We'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4 sm:mb-6 animate-pulse">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-sm sm:text-base text-slate-300 text-center">
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
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-600/50 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-400/80 focus:ring-2 focus:ring-orange-400/30 transition"
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
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-600/50 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-400/80 focus:ring-2 focus:ring-orange-400/30 transition"
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
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-600/50 border border-slate-500/50 rounded-xl text-white focus:outline-none focus:border-orange-400/80 focus:ring-2 focus:ring-orange-400/30 transition appearance-none"
                      required
                    >
                      <option value="" className="bg-slate-800">
                        Select a subject
                      </option>
                      <option value="join" className="bg-slate-800">
                        Join the Team
                      </option>
                      <option value="collaboration" className="bg-slate-800">
                        University Collaboration
                      </option>
                      <option value="sponsorship" className="bg-slate-800">
                        Sponsorship Opportunities
                      </option>
                      <option value="media" className="bg-slate-800">
                        Media Inquiry
                      </option>
                      <option value="general" className="bg-slate-800">
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
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-600/50 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-400/80 focus:ring-2 focus:ring-orange-400/30 transition resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold text-sm sm:text-lg hover:from-orange-700 hover:to-yellow-700 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 group"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
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
