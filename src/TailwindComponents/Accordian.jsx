import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    { title: "Accordion Item 1", content: "This is the content of item 1." },
    { title: "Accordion Item 2", content: "This is the content of item 2." },
    { title: "Accordion Item 3", content: "This is the content of item 3." },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      {accordionData.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <button
            className="w-full flex justify-between items-center p-4 text-left font-semibold bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span>{activeIndex === index ? "−" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white border-t">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;