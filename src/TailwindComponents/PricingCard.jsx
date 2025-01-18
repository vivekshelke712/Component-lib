import React from "react";

const PricingCard = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: 9,
      features: ["1 User", "10GB Storage", "Email Support"],
      buttonText: "Choose Basic",
    },
    {
      title: "Pro",
      price: 29,
      features: ["5 Users", "50GB Storage", "Priority Support"],
      buttonText: "Choose Pro",
    },
    {
      title: "Enterprise",
      price: 49,
      features: ["Unlimited Users", "Unlimited Storage", "Dedicated Support"],
      buttonText: "Choose Enterprise",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center space-y-8 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Our Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-700">
                {plan.title}
              </h3>
              <p className="mt-4 text-4xl font-bold text-gray-900">
                ${plan.price}
              </p>
              <p className="text-gray-500 text-sm mt-1">per month</p>
            </div>
            <ul className="px-6 py-4 space-y-3 border-t border-gray-200">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="p-6">
              <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
