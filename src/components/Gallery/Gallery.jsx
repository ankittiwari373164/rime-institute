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
            url: "/campus-image-rime-2.jpeg"
        },
        {
            category: "campus",
            url: "campus-image-rime-1.jpeg",
        },
        {
            category: "campus",
            url: "/campus-image-rime.jpeg",
        },
        {
            category: "campus",
            url: "/campus-image-rime-3.jpeg",
        },
        {
            category: "campus",
            url: "/campus-image-rime-4.jpeg",
        },
        {
            category: "campus",
            url: "/campus-image-rime-5.jpeg",
        },
        {
            category: "events",
            url: "/orientation-1.jpeg",
        },
        {
            category: "events",
            url: "/event-1.jpeg",
        },
        {
            category: "events",
            url: "/event-2.jpeg",
        },
        {
            category: "events",
            url: "/event-3.jpeg",
        },
        {
            category: "events",
            url: "/event-4.jpeg",
        },
        {
            category: "facilities",
            url: "/workshop-3.jpeg"
        },
        {
            category: "facilities",
            url: "/workshop-2.jpeg",
        },
        {
            category: "activities",
            url: "/sport-3.jpeg",
        },
        {
            category: "activities",
            url: "/sport-2.jpeg",
        },
        {
            category: "activities",
            url: "/sport-1.jpeg",
        },
        {
            category: "activities",
            url: "/sport-4.jpeg",
        },
        {
            category: "activities",
            url: "/sport-5.jpeg",
        },
        {
            category: "activities",
            url: "/sport-6.jpeg",
        },
        {
            category: "activities",
            url: "/sport-7.jpeg",
        },
        {
            category: "activities",
            url: "/activities-1.jpeg",
        },
        {
            category: "activities",
            url: "/activities-2.jpeg",
        },
        {
            category: "activities",
            url: "/activities-3.jpeg",
        },
        {
            category: "activities",
            url: "/activities-4.jpeg",
        },
        {
            category: "facilities",
            url: "/workshop-1.jpeg",
        },
        {
            category: "facilities",
            url: "/workshop-4.jpeg",
        },
        {
            category: "facilities",
            url: "/workshop-5.jpeg",
        },
        {
            category: "facilities",
            url: "/workshop-6.jpeg",
        },
        {
            category: "facilities",
            url: "/workshop-7.jpeg",
        },
        {
            category: "facilities",
            url: "/library-img-1.jpeg",
        },
        {
            category: "facilities",
            url: "/library-img-2.jpeg",
        },
        {
            category: "facilities",
            url: "/library-img-3.jpeg",
        },
        {
            category: "facilities",
            url: "/library-img-4.jpeg",
        },
        {
            category: "facilities",
            url: "/library-img-5.jpeg",
        },
        {
            category: "facilities",
            url: "/lab-1.jpeg",
        },
        {
            category: "facilities",
            url: "/lab-2.jpeg",
        },
        {
            category: "facilities",
            url: "/classroom-1.jpeg",
        },
        {
            category: "facilities",
            url: "/classroom-2.jpeg",
        },
        {
            category: "facilities",
            url: "/classroom-3.jpeg",
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;