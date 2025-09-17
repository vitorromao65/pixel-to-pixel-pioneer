import React from 'react';

export const HighlightsSection: React.FC = () => {
  return (
    <section className="bg-[rgba(0,0,0,0)] w-full text-lg text-[rgba(59,54,95,1)] font-semibold whitespace-nowrap leading-none mt-6 px-4">
      <div className="bg-[rgba(0,0,0,0)] flex flex-col justify-center py-1.5">
        <h2>Destaques</h2>
      </div>
      <div className="mt-4">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/b9fc88e3ff89a62d7fac33dd044d91bd9d1c224f?placeholderIfAbsent=true"
          className="aspect-[1.12] object-contain w-full"
          alt="Featured content highlight"
        />
      </div>
    </section>
  );
};
