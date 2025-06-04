import React from 'react';
import birthdayImage1 from "../assets/images/Img1.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 flex flex-col items-center justify-center text-white px-6 text-center relative overflow-hidden">
      
      {/* Floating Confetti (simple divs for effect) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-3xl animate-bounce">🎊</div>
        <div className="absolute top-20 right-16 text-3xl animate-pulse">🎉</div>
        <div className="absolute bottom-10 left-1/3 text-3xl animate-bounce">💫</div>
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-4 animate-fade-in">
        🎂 Happy Birthday,<br />
        <span className="text-yellow-300">Mr. Johnson Saka</span>
      </h1>

      <p className="text-lg md:text-2xl max-w-2xl mb-8 font-light animate-fade-in delay-200">
        
      </p>

      <img
        src={birthdayImage1}
        alt="Birthday Celebration"
        className="rounded-2xl shadow-2xl max-w-xs md:max-w-md border-4 border-white animate-fade-in delay-300"
      />
    </section>
  );
};

export default HeroSection;
