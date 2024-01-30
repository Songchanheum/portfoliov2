import React from "react";

const ResumeWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <article className="mb-5">
      <h2 className="border-b-4 border-gray-300 text-xl font-extrabold w-full p-4">
        <span>{title}</span>
      </h2>
      {children}
    </article>
  );
};

export default ResumeWrapper;
