import { useEffect } from 'react';

const Error = ({ message, clearError }) => {
  useEffect(() => {
    
    const timer = setTimeout(() => {
      clearError();
    }, 5000);

    return () => clearTimeout(timer);
  }, [clearError]);

  return (
    <div className="bg-red-500 font-nunito font-bold text-center uppercase text-white p-3 mb-4 rounded">
      {message}
    </div>
  );
};

export default Error;
