

const ExtraSection2 = () => {

  const benefits = [
    {
      title: "Time-Saving",
      description:
        "Automate routine library tasks to save time for both librarians and members.",
      icon: "⏱️",
    },
    {
      title: "User-Friendly",
      description:
        "A simple and intuitive interface that makes managing the library easy for everyone.",
      icon: "✨",
    },
    {
      title: "Data Security",
      description:
        "Keep library data safe with robust security features and regular backups.",
      icon: "🔒",
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Why Choose Our Library Management System
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl text-gray-700 mb-4 text-center">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSection2;