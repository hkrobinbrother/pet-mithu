import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle";

const FAQ = () => {
  const faqs = [
    {
      title: "What services does Zupet offer for my pet?",
      content:
        "Zupet offers grooming, vet care, training, walking, and personalized pet services. Your pet receives expert care tailored to their unique needs.",
    },
    {
      title: "Are your caregivers trained and certified?",
      content:
        "Yes, all our caregivers are professionally trained and certified to ensure your pet receives the best care possible.",
    },
    {
      title: "Do you provide emergency vet support?",
      content:
        "Yes, we offer emergency veterinary support to ensure your pet’s safety at all times.",
    },
    {
      title: "Can I customize services for my pet?",
      content:
        "Absolutely! Our services are fully customizable based on your pet’s needs and preferences.",
    },
    {
      title: "How do I book a service?",
      content:
        "You can easily book a service through our website by selecting your desired service and time slot.",
    },
    {
      title: "Do you offer services for all pet types?",
      content:
        "Yes, we provide services for dogs, cats, and other small pets.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <SectionTitle
      firstHeading="FAQ Question"
      SecondHeading="History & Family Adoption"
      >

      </SectionTitle>
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.title}</h3>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
