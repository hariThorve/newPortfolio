const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 rounded"></div>
      </div>
    </div>
  );
};

export default SectionHeading;