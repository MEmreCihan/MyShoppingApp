import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col-3 justify-around text-center bg-amber-100 p-6">
      <div className="items-start text-left">
        <h1 className="text-lg font-medium mb-6">CONTACT US</h1>
        <p>(506)9305911</p>
        <p>memrecihan@outlook.com</p>
      </div>
     
      <div className="w-72 block text-left">
        <h1 className="text-lg font-medium mb-6">SUBSCRIBE</h1>
        <p>Get E-mail updates about our latest shop and special offers.</p>
        <input placeholder="Enter your email here.." className="bg-transparent rounded-md"/>
        <br></br>
        <button className="text-lg font-semibold">Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
