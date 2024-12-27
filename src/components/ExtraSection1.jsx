import React from "react";

const ExtraSection1 = () => {
  const features = [
    {
      title: "Efficient Book Tracking",
      description:
        "Easily track borrowed and returned books, ensuring accurate inventory management.",
      icon: "📚",
    },
    {
      title: "Member Management",
      description:
        "Maintain detailed records of library members, including borrowing history and contact details.",
      icon: "👥",
    },
    {
      title: "Comprehensive Reporting",
      description:
        "Generate detailed reports on book usage, member activity, and overdue books.",
      icon: "📊",
    },
  ];

  const services = [
    {
      title: "Silent Reading",
      description:
        "One needs silence to read books or to study, our library has special arrangements for the silence zone.",
      image: "https://i.ibb.co/k51qrJx/m010t0665-b-book-icon-17mar23.jpg", // Replace with actual image URLs
    },
    {
      title: "Book Rentals",
      description:
        "Apart from reading inside the library, we also provide facilities to rent and return the books in time.",
      image: "https://i.ibb.co/k51qrJx/m010t0665-b-book-icon-17mar23.jpg", // Replace with actual image URLs
    },
    {
      title: "Ambience and Infrastructure",
      description:
        "Modern infrastructure, air-conditioned, soundproof, state-of-the-art classrooms that foster learning.",
      image: "https://i.ibb.co/k51qrJx/m010t0665-b-book-icon-17mar23.jpg", // Replace with actual image URLs
    },
    {
      title: "Categorized Book Collection",
      description:
        "We have an excellent collection of books categorized under children, fiction, cookbooks, etc., for easy access.",
      image: "https://i.ibb.co/k51qrJx/m010t0665-b-book-icon-17mar23.jpg", // Replace with actual image URLs
    },
  ];

  return (
    <div className="container mx-auto my-10 space-y-5">
      {/* Features Section */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Key Features of Library Management System
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl text-gray-700 mb-4 text-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <h2 className="text-2xl font-bold text-center my-10">Library Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300 p-4"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Enquire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSection1;
