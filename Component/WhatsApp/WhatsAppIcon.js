// WhatsAppIcon.js
import React from 'react';
import Whatapp from "../../Img/whatapp.png";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+923345380203"
      className="fixed right-2 top-1/2 transform -translate-y-1/2 z-50 m-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={ Whatapp}
        alt="WhatsApp"
        className="w-16 h-16 "
      />
    </a>
  );
};

export default WhatsAppIcon;
