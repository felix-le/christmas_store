import React from 'react';
import { createUseStyles } from 'react-jss';
import tw from 'tailwind-styled-components';

// TODO: don't know how to use tw to style the border bottom

const HeadingSection = tw.h3`
before:h-1 before:w-[260px] before:mr-5 before:content-[attr(before)] before:border-b-1 flex items-center before:border-solid'
`;
const useStyles = createUseStyles({
  sectionHeading: {
    '&:before': {
      borderBottom: '1px solid black',
    },
  },
});

function SectionTitle({ title }) {
  const classes = useStyles();
  return (
    <>
      <h3
        before='{"content": "-"}'
        className={`before:h-1 before:w-[260px] before:mr-5 before:content-[attr(before)] before:border-b-1 flex items-center before:border-solid ${classes.sectionHeading}`}
      >
        Hello
      </h3>
    </>
  );
}

export default SectionTitle;
