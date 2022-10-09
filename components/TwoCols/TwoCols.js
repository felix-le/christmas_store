import React from 'react';
import { SectionTitle } from 'components/common';
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

function TwoCols({ heading = 'Hello' }) {
  const classes = useStyles();
  return (
    <section>
      <HeadingSection before=' ' className={classes.sectionHeading}>
        {heading}
      </HeadingSection>
      <div>TwoCols</div>
    </section>
  );
}

export default TwoCols;
