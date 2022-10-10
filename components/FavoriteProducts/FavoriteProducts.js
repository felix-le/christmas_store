import Section from '../../Elements/Section';
import SectionTitle from 'Elements/Section/SectionTitle';
const products = [
  {
    id: 1,
    name: 'Link to SOAP',
    href: '#',
    price: '$13',
    description: 'Link to SOAP',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    name: 'Link to Chirstmas presents ',
    href: '#',
    price: '$64',
    description: 'Walnut',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: 'Link to Chirstmas Halloween Collection',
    href: '#',
    price: '$32',
    description: 'Heather Gray',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  // More products...
];

export default function FavoriteProducts() {
  return (
    <Section>
      <div className='container text-center'>
        <SectionTitle
          title='How it works'
          sectionSubTitle='Everything you need to get amazing products'
          sectionSummary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum obcaecati minima fuga '
        />

        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
          {products.map((product) => (
            <a key={product.id} href={product.href} className='group'>
              <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3'>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='h-full w-full object-cover object-center group-hover:opacity-75'
                />
              </div>
              <div className='mt-4 flex items-center justify-between text-base font-medium text-gray-900'>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <p className='mt-1 text-sm italic text-gray-500'>
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
