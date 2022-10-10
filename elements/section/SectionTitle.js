import React from 'react';

function SectionTitle({ title, sectionSubTitle, sectionSummary }) {
  return (
    <div className='sectionTitle'>
      <h1 className='font-semibold'>
        {title}
        <span>{sectionSubTitle}</span>
      </h1>
      <h2 className='mx-auto mt-5 max-w-prose text-gray-500'>
        {sectionSummary}
      </h2>
    </div>
  );
}

export default SectionTitle;
