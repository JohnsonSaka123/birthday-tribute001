import React from 'react';
import birthdayImage2 from "../assets/images/Img2.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-pink-50 text-gray-900 max-w-5xl mx-auto rounded-3xl shadow-inner">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-pink-700 relative">
        A man of many sacrifices
        <span className="absolute -top-4 right-1 text-2xl animate-bounce">💖</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="relative">
          <img
            src={birthdayImage2}
            alt="Mr. Johnson"
            className="rounded-xl shadow-2xl w-72 h-96 object-cover border-4 border-pink-300"
          />
          <div className="absolute -top-4 -left-4 text-3xl">🎉</div>
          <div className="absolute -bottom-4 -right-4 text-3xl">🎈</div>
        </div>
        <p className="text-lg md:text-xl leading-relaxed font-medium text-center">
          🎉 Birthday & Thank You Message 🎉
            Happy Birthday!
          Today, I celebrate more than just your life — I celebrate your kindness, your sacrifices, and your unwavering belief in me.

          <br />Coming from a humble background, I never imagined having someone who would stand by me the way you have. You've turned what could have been a struggle into a journey filled with hope and opportunity. Because of you, I dare to dream bigger, work harder, and never give up.

          Thank you for being my strength when things get tough and my guide when the road gets uncertain. <br /> Your support means the world to me — not just for the education, but for the love and faith you've poured into me.

          May this birthday be filled with as much joy and goodness as you bring into the lives of others. I hope one day I can repay even a fraction of what you've done for me.

          With all my heart,
          Thank you — and Happy Birthday. 🎂❤️
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
