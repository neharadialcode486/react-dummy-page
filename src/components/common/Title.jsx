import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div>
      <h2 className="text-black text-2xl md:text-3xl font-bold">{title}</h2>
      <p className="text-sm font-notmal pt-2">{desc}</p>
    </div>
  );
};

export default Title;
