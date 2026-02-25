import React, { useState } from 'react'
import { ImageWithFallback } from '../utils/ImageWithFallback';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        { id: "all", label: "All" },
        { id: "campus", label: "Campus" },
        { id: "events", label: "Events" },
        { id: "facilities", label: "Facilities" },
        { id: "activities", label: "Activities" },
    ];

    const images = [
        {
            category: "campus",
            url: "/rime-8.jpeg",
            title: "Main Campus Building",
        },
        {
            category: "campus",
            url: "rime-1.jpeg",
            title: "Engineering Block",
        },
        {
            category: "campus",
            url: "/rime-4.jpeg",
            title: "Campus Grounds",
        },
        {
            category: "campus",
            url: "/rime-5.jpeg",
            title: "Campus Grounds",
        },
        {
            category: "events",
            url: "/graduation-ceremony.png",
            title: "Graduation Ceremony 2026",
        },
        {
            category: "facilities",
            url: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzA4NzEzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Modern Classroom",
        },
        {
            category: "facilities",
            url: "/library-image.png",
            title: "Library",
        },
        {
            category: "activities",
            url: "/group-study.png",
            title: "Student Study Group",
        },
        {
            category: "facilities",
            url: "/computer-lab.png",
            title: "Computer Lab",
        },
    ];

    const filteredImages =
        selectedCategory === "all"
            ? images
            : images.filter((img) => img.category === selectedCategory);


    return (
        <div>
            <section className="py-8 bg-white border-b sticky top-30 z-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 cursor-pointer rounded font-semibold transition-colors ${selectedCategory === category.id
                                    ? "bg-[#C9A961] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredImages.map((image, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
                            >
                                <div className="h-64 overflow-hidden">
                                    <ImageWithFallback
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;