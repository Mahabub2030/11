const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img 
        src="https://i.ibb.co/NWdB0Td/283635-P6-Q1-KZ-616.jpg"
        alt="Error Page Illustration"
        className="w-full max-w-screen-md h-auto mb-8 rounded-3xl"
      />
      <h2 className="text-red-600 text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-700 text-lg">
        Oops! The page you are looking for doesn't exist.
      </p>
    </div>
  );
};

export default ErrorPage;
