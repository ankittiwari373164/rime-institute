import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

const CardInfo = () => {
     const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Sikri, Ballabhgarh", "Faridabad, Haryana 121004", "India"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["1800-833-3338 (Toll Free)", "+91-8810676939"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@rime.co.in", "admission@rime.co.in"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
    },
  ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A961]/10 rounded-full mb-4">
                                    <Icon className="w-8 h-8 text-[#C9A961]" />
                                </div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-3">{info.title}</h3>
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600 text-sm mb-1">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default CardInfo;
