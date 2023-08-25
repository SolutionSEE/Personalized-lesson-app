import React from "react";

const GradientInput = ({ icon, ...rest }) => {
  return (
    <div className="relative input-wrapper">
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="border-4 border-red-700/30">{icon}</span>
        </span>
      )}
      <input
        {...rest}
        className="block w-full py-3 pl-12 pr-4 leading-5 text-white transition duration-150 ease-in-out border rounded-lg outline-none appearance-none gradient-input border-primary-dark bg-nobel-dark"
      />
    </div>
  );
};

export default GradientInput;
