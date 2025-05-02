"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Phone, MapPin, Clock, ChevronRight, Star, HomeIcon, Hammer, Users, Mail, Facebook, Instagram, Twitter, Check, Wrench, HardHat, Clock3, Handshake } from 'lucide-react';

export default function Home() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Clear form after 2 seconds
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 2000);
  };
  const testimonials = [
    {
      name: "Imran Khan",
      role: "Homeowner",
      image: "men_7.jpg",
      text: "Aziz Building Services transformed our home with their excellent extension work. Their expertise and attention to detail exceeded our expectations."
    },
    {
      name: "Sarah Johnson",
      role: "Property Developer",
      image: "women_13.jpg",
      text: "As a property developer, I rely on consistent quality and service. Aziz Building Services delivers exceptional results every time."
    },
    {
      name: "Mohammed Ali",
      role: "Contractor",
      image: "men_48.jpg",
      text: "The most professional building team in the West Midlands. Great workmanship and always reliable service."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-teal-900">
              Aziz Building Services
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-teal-900">About</Link>
              <Link href="#services" className="text-gray-700 hover:text-teal-900">Services</Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-teal-900">Testimonials</Link>
              <Link href="#contact" className="text-gray-700 hover:text-teal-900">Contact</Link>
            </div>
            <Link
              href="#contact"
              className="bg-teal-800 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-900 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[85vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/70 to-transparent z-10"></div>
        <Image
          src="/work.png"
          alt="Construction site"
          className="absolute inset-0 object-cover"
          fill
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl">
            Crafting Spaces, Building Dreams
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            West Midlands premier building services company, delivering exceptional craftsmanship for homes and businesses
          </p>
          <div className="flex gap-4">
            <Link
              href="#contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Free Consultation
            </Link>
            <Link
              href="#services"
              className="bg-white text-teal-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Clock, text: "Mon-Sat: 9AM - 6PM, Sunday: Closed" },
              { Icon: Phone, text: "Contact Us", href: "#contact" },
              { Icon: MapPin, text: "18 Gilgal, Stourport-On-Severn, DY13 9AJ" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <item.Icon className="w-6 h-6 text-orange-400" />
                {item.href ? (
                  <a href={item.href} className="font-medium text-white hover:text-orange-200">
                    {item.text}
                  </a>
                ) : (
                  <span className="font-medium text-white">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-teal-900">About Aziz Building Services</h2>
              <p className="text-gray-700 mb-6">
                With many years of experience in the building industry, Aziz Building Services has
                established itself as a trusted name in construction excellence across the West Midlands.
              </p>
              <p className="text-gray-700 mb-6">
                Based out of Stourport-on-Severn, we pride ourselves on delivering high-quality building solutions,
                from home extensions and renovations to complete new builds and commercial projects.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { Icon: Users, text: "Expert Craftsmen" },
                  { Icon: Users, text: "Dedicated Team" },
                  { Icon: HomeIcon, text: "Quality Finishes" },
                  { Icon: Hammer, text: "Reliable Service" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.Icon className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link
                href="#services"
                className="bg-teal-800 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-900 transition-colors duration-200 inline-flex items-center"
              >
                Our Services <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/service_1.png"
                alt="Our work"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-teal-900">Our Services</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive building solutions tailored to your specific needs,
              delivered with exceptional quality and attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Home Extensions",
                desc: "Create additional living space with our bespoke home extension services",
                img: "service_1.png"
              },
              {
                title: "New Builds",
                desc: "Turn your vision into reality with our complete new build services",
                img: "service_2.png"
              },
              {
                title: "Renovations",
                desc: "Transform your existing space with our comprehensive renovation solutions",
                img: "service_3.png"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-56">
                  <Image
                    src={`/${service.img}`}
                    alt={service.title}
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-teal-900">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.desc}</p>
                  <Link
                    href="#contact"
                    className="text-orange-500 hover:text-orange-600 inline-flex items-center font-medium transition-colors duration-200"
                  >
                    Contact Us <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="bg-teal-800 text-white px-8 py-4 rounded-md font-semibold hover:bg-teal-900 transition-colors duration-200 inline-flex items-center"
            >
              Contact Us <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose Aziz Building Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Quality Craftsmanship",
                desc: "Exceptional attention to detail and superior workmanship on every project",
                Icon: Wrench
              },
              {
                title: "Experienced Team",
                desc: "Years of industry experience and skilled professionals",
                Icon: HardHat
              },
              {
                title: "Reliable Service",
                desc: "Committed to meeting deadlines and exceeding expectations",
                Icon: Clock3
              },
              {
                title: "Customer Satisfaction",
                desc: "Your vision is our priority, with clear communication throughout",
                Icon: Handshake
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <item.Icon className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-400">{item.title}</h3>
                <p className="text-teal-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-teal-900">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  <Image
                    src={`/${testimonial.image}`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h4 className="font-semibold text-teal-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="py-16 bg-teal-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Us</h2>
              <p className="text-teal-100 mb-8">
                Ready to start your building project? Get in touch with us today for a free, no-obligation consultation and quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  <span className="text-white">18 Gilgal, Stourport-On-Severn, England, DY13 9AJ</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-orange-400" />
                  <span className="text-white">Contact us via the form</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-orange-400" />
                  <span className="text-white">shazirul.azizbuildingservices@outlook.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-orange-400" />
                  <span className="text-white">Mon-Sat: 9AM - 6PM, Sunday: Closed</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <span className="text-white">
                  <Facebook className="w-6 h-6" />
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-teal-900">Get in Touch</h3>
              <div>
                <form onSubmit={handleSubmit} className="relative">
                  {isSubmitted && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10 rounded-lg transition-opacity duration-300">
                      <div className="text-center">
                        <div className="mb-4 text-green-500 flex justify-center">
                          <Check className="w-16 h-16" />
                        </div>
                        <p className="text-teal-900 font-semibold text-xl">Message Sent!</p>
                        <p className="text-gray-600">Thank you for contacting us</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-800"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-200"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Aziz Building Services</h3>
              <p className="text-gray-400">
                Quality construction services based in Stourport-on-Severn, serving the West Midlands and surrounding areas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Home Extensions</span></li>
                <li><span className="text-gray-400">New Builds</span></li>
                <li><span className="text-gray-400">Renovations</span></li>
                <li><span className="text-gray-400">Commercial Projects</span></li>
                <li><span className="text-gray-400">Project Management</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <address className="not-italic text-gray-400">
                18 Gilgal<br />
                Stourport-On-Severn<br />
                England, DY13 9AJ
              </address>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="mb-2">© {new Date().getFullYear()} AZIZ BUILDING SERVICES LTD. All rights reserved.</p>
            <p>Company No. 15578120</p>
          </div>
        </div>
      </footer>
    </div>
  );
}