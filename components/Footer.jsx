"use client";

import { useEffect } from "react";

const Footer = () => {
  //Google Translator
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  useEffect(() => {
    // Select all the elements with the .goog-te-combo class except for the first one
    const comboElements = document.querySelectorAll(
      "#google_translate_element .goog-te-combo:not(:first-child)"
    );

    // Remove the .goog-te-combo class from the extra elements
    comboElements.forEach((element) => {
      element.classList.remove("goog-te-combo");
    });
  }, []);

  return (
    <div className="text-center">
      <h5>Copyright 2023. All Rights Reserved By Brief Me.</h5>
      <h5>Translate This Page:</h5>
      <div className="translator" id="google_translate_element"></div>
    </div>
  );
};

export default Footer;
