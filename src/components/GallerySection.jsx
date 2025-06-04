import React from 'react';
import img1 from '../assets/images/Img1.jpg';
import img2 from '../assets/images/Img2.jpg';
import img3 from '../assets/images/Img3.jpg';
import img4 from '../assets/images/Img4.jpg';
import img5 from '../assets/images/Img5.jpg';

const photos = [
  { src: img1, alt: "Laughing together at the park" },
  { src: img2, alt: "That thoughtful expression" },
  { src: img3, alt: "Smiling in the sunlight" },
  { src: img4, alt: "Special occasion portrait" },
  { src: img5, alt: "Candid joyful moment" }
];

const GallerySection = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
        A Good Run Down Memory Lane
      </h2>
      <p className="text-center text-lg mb-10 text-gray-600 max-w-xl mx-auto">
        
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md transform hover:scale-105 transition duration-300"
            aria-label={`Memory photo ${index + 1}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover  transition-opacity duration-500 hover:opacity-90"
              style={{ objectPosition: '50% 25%' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
