import React, { useState } from 'react'
import Map from './Map';
import { Send } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const server_url =  import.meta.env.VITE_SERVER_URL;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${server_url}/api/contact/user-contact`, formData);
          if(res.status === 200 || res.status === 201){
            toast.success("Thank you for your message! We will get back to you soon.");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
          }
        } catch (error) {
          console.error("Error: ", error.message);
          const errorMessage = error.response?.data?.message || "Something went wrong";
          toast.error(errorMessage);
        }
    };

    return (
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl mb-6 text-blue-900 font-bold">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-[#1a2847]/90 text-white px-8 py-4 rounded font-semibold hover:bg-[#1a2847] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <Map />
          </div>
        </div>
        </section>
    )
}

export default ContactForm;