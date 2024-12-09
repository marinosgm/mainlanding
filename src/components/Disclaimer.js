import React from "react";

const Disclaimer = () => {
  return (
    <section className="w-full bg-gray-300 px-12 py-12 lg:py-20 lg:px-[90px]">
      {/* Centered Content Wrapper */}
      <div className="max-w-[1080px] mx-auto  text-center lg:text-left">
        <p className="text-sm lg:text-md text-gray-600 leading-relaxed">
          <strong>Disclaimer:</strong> The information provided on this page is for educational purposes only and should not be considered as investment advice or research. Information on this page may not constitute the most up-to-date information. Any information or comments expressed by third parties are their own and do not necessarily reflect the views of Tickmill. Tickmill takes no responsibility for the accuracy or reliability of such information.
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;
