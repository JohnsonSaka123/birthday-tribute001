import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        A Message Just for You 🎬
      </h2>
      <div className="max-w-3xl mx-auto aspect-video">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://youtu.be/JCXtKjgD6NE?si=nXLifvRrqhpaMnWI"
          title="Birthday Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
