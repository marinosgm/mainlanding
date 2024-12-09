import React from "react";

const WhyJoin = () => {
  return (
    <section className="bg-gray-50 py-10 px-6 lg:px-20 text-center lg:text-left">
      {/* Wrapping Div with Max Width */}
      <div className="max-w-[1920px] mx-auto">
        {/* Title Section */}
        <div className="md:max-w-2xl xl:max-w-6xl lg:max-w-4xl mx-auto mb-8 text-center pt-[50px] pb-6">
          <h2 className="text-2xl xl:text-4xl lg:text-3xl font-bold mb-4 lg:px-9">
            ¿Quieres estar al tanto de las mejores oportunidades en el mercado financiero?
            Matías Mauccione, un innovador trader con un enfoque fresco y efectivo, te invita a formar parte de su grupo exclusivo en Telegram.
          </h2>

          <p className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:px-9">
            ¡No pierdas la oportunidad de obtener información valiosa y actualizaciones en tiempo real!
          </p>
          <button className="mt-6 bg-teal-500 text-white px-4 lg:px-[58px] py-2 rounded-full hover:bg-teal-600">
            Únete al Grupo Exclusivo en Telegram
          </button>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 md:max-w-[950px] m-auto">
          {/* Left Column */}
          <div className="bg-gray-200 shadow-md rounded-[50px] p-12 md:px-12">
            <h3 className="text-3xl font-bold text-red-600 mb-4">¿Por qué unirte?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold text-xl mr-2">›</span>
                Acceso Exclusivo a Análisis de Expertos: Obtén informes y perspectivas que no encontrarás en ningún otro lugar.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold text-xl mr-2">›</span>
                Oportunidades de Inversión: Descubre las mejores oportunidades en el mercado antes que nadie.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold text-xl mr-2">›</span>
                Actualizaciones en Tiempo Real: Mantente al día con el desarrollo de operaciones y oportunidades.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold text-xl mr-2">›</span>
                Contenidos Premium Gratis: Disfruta de materiales educativos y análisis que te ayudarán a mejorar tus estrategias de inversión.
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="bg-gray-200 shadow-md rounded-[50px] p-12 md:px-12">
            <h3 className="text-3xl font-bold text-red-600 mb-4">¿Qué recibirás en el grupo?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold text-xl mr-2">›</span>
                Análisis Diario de Divisas: Perspectivas detalladas para tomar decisiones informadas.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold text-xl mr-2">›</span>
                Desarrollo de Operaciones en Vivo: Estrategias y tácticas mientras el mercado se mueve.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold text-xl mr-2">›</span>
                Calendario Económico Actualizado: Información clave sobre eventos económicos que pueden impactar tus inversiones.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold text-xl mr-2">›</span>
                Resultados de la Bolsa de Nueva York: Resúmenes y análisis de las principales sesiones bursátiles.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
