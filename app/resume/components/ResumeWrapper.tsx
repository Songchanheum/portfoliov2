import React from "react";

const ResumeWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-5">
      <h2 className="border-b-4 border-gray-300 text-xl font-extrabold w-full p-4">
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
};

export default ResumeWrapper;
