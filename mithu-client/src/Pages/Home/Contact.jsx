import { useState } from "react";
import FaqData from "react-faq-component";
const Contact = () => {
 

  const data1 = {
    title: "FAQ ",
    rows: [
      {
        title: " What services does Zupet offer for my pet?",
        content: `Zupet offers grooming, vet care, training, walking, and personalized pet services. Your pet receives expert care tailored to their unique needs.`,
      },
      {
        title: "Are your caregivers trained and certified?",
        content:
          "Zupet offers grooming, vet care, training, walking, and personalized pet services. Your pet receives expert care tailored to their unique needs.",
      },
      {
        title: "Are your caregivers trained and certified?",
        content:
          "Zupet offers grooming, vet care, training, walking, and personalized pet services. Your pet receives expert care tailored to their unique needs.",
      },
      {
        title: "Are your caregivers trained and certified?",
        content:
          "Zupet offers grooming, vet care, training, walking, and personalized pet services. Your pet receives expert care tailored to their unique needs.",
      },
      {
        title: "Are your caregivers trained and certified?",
        
        content:
          "Zupet offers grooming, vet care, training, walking, and personalized pet services. Your pet receives expert care tailored to their unique needs.",
      },
      {
        title: "Are your caregivers trained and certified?",

        content:
          "Zupet offers grooming, vet care, training, walking, and personalized pet services. Your pet receives expert care tailored to their unique needs.",
      },
    ],
  };

  return (
    <div className="container mx-auto">
        
      <div className="faq-style-wrapper space-y-6">
        <FaqData className="space-y-4" data={data1} />
      </div>
    </div>
  );
};

export default Contact;
