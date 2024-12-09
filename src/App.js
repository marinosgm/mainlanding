import React from "react";
import Header from "./components/Header";
import WhyJoin from "./components/WhyJoin";
import About from "./components/About";
import JoinGroup from "./components/JoinGroup";
import PrivacyNotice from "./components/PrivacyNotice";
import Disclaimer from "./components/Disclaimer";


const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhyJoin />
      <About />
      <JoinGroup />
      <PrivacyNotice />
      <Disclaimer />
    </div>
  );
};

export default App;
