import React from 'react';
import Image from 'next/image';
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import SectionTitle from 'Elements/Section/SectionTitle';
import Section from '../../Elements/Section';
const features = [
  {
    name: 'Push to Deploy',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL Certificates',
    description:
      'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple Queues',
    description:
      'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: ArrowPathIcon,
  },
];
function shopSteps() {
  return (
    <Section>
      <div className='container text-center'>
        <SectionTitle
          title='How it works'
          sectionSubTitle='Everything you need to get amazing products'
          sectionSummary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum obcaecati minima fuga '
        />
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => (
            <div key={feature.name} className='pt-6'>
              <div className='flow-root rounded-lg bg-gray-50 px-6 pb-8'>
                <div className='-mt-6'>
                  <div>
                    <span className='inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg'>
                      <feature.icon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </span>
                  </div>
                  <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                    {feature.name}
                  </h3>
                  <p className='mt-5 text-base text-gray-500'>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default shopSteps;
