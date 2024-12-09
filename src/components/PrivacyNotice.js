import React from "react";

const PrivacyNotice = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* Centered Content Wrapper */}
      <div className="max-w-[1080px] mx-auto px-6 lg:px-40 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left justify-between">
        {/* Text Section */}
        <div className="text-gray-800 lg:w-2/3 lg:justify-start">
          <h2 className="text-2xl font-bold mb-4">Aviso de Privacidad</h2>
          <p className="text-md mb-6">
            Al registrarte, aceptas recibir comunicaciones por correo
            electrónico y consientes la recopilación y procesamiento de tus
            datos personales para fines de marketing. Puedes darte de baja en
            cualquier momento y solicitar la eliminación de tus datos de
            contacto.
          </p>
          <p className="text-md">Todos los derechos reservados.</p>
        </div>

        {/* Logo Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-center mt-8 lg:mt-0">
          <img
            src="/assets/logo_white_background.jpg"
            alt="Giomoda Logo"
            className="h-32 lg:h-40" // Increased logo size
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacyNotice;
