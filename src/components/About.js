import React from "react";

const About = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-auto lg:h-[400px] xl:h-[700px] bg-cover bg-center px-6 lg:px-20 py-10"
      style={{
        backgroundImage: "url('/assets/image.jpg')", // Background with Matías's image
      }}
    >
      {/* Gradient Overlay. */}

      {/* Right Section Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center lg:items-end justify-center lg:justify-end max-w-[1080px] m-auto">
        {/* Static Text Section */}
        <div className="p-6 lg:p-10 rounded-lg text-center lg:text-left lg:max-w-xl text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Conoce a < br /> Matías Mauccione
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
            Matías Mauccione es un trader de vanguardia con menos de 30 años,
            que ofrece un enfoque innovador para el análisis del mercado. Su
            método combina un profundo entendimiento de la oferta y la demanda
            con una visión única de los mercados financieros. Con Matías,
            aprenderás a identificar y aprovechar las oportunidades más 
            prometedoras en tu inversión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
