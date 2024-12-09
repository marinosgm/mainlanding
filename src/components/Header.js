import React from "react";

const Header = () => {
  return (
    <header
      className="relative flex flex-col  lg:flex-row items-center justify-between h-auto lg:h-[500px] xl:h-[1050px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/header.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="relative z-10 flex flex-col items-center m-auto w-full max-w-[1080px] lg:flex-row lg:justify-between">
  {/* Left Section */}
  <div className="px-6 py-10 lg:px-[120px] xl:pl-0 text-center lg:text-left text-white">
    {/* Logo */}
    <div className="mb-4 flex justify-center lg:justify-start">
      <img
        src="/assets/white_logo_transparent_background.png" // Add your logo file here
        alt="Giomoda Logo"
        className="h-40"
      />
    </div>

    {/* Heading */}
    <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold max-w-lg mx-auto lg:mx-0 lg:pr-[150px] xl:pr-0">
      Impulsa tu Estrategia de Inversión con  Matías Mauccione
    </h1>

    {/* Button */}
    <div className="mt-6 flex justify-center lg:justify-start">
      <button className="bg-teal-500 text-white xl:text-2xl px-4 lg:px-[58px] py-2 rounded-full hover:bg-teal-600">
        Únete al Grupo Exclusivo en Telegram
      </button>
    </div>
  </div>
</div>

    </header>
  );
};

export default Header;
