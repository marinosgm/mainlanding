import React from "react";

const JoinGroup = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('/assets/background.png')",
      }}
    >
      {/* Centered Content Wrapper */}
      <div className="max-w-[1080px] mx-auto text-center px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          ¡Únete al Grupo Ahora!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Accede a información exclusiva y únete a una comunidad de traders
          apasionados!
        </p>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-full text-lg hover:bg-teal-600">
          Únete al Grupo Exclusivo en Telegram
        </button>
      </div>
    </section>
  );
};

export default JoinGroup;
