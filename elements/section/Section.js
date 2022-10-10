import React from 'react';
function Section({ children, bgColor = 'bg-white' }) {
  return (
    <section className={`${bgColor} py-16 sm:py-20 relative`}>
      {children}
    </section>
  );
}

export default Section;
