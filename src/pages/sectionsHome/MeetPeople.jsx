import React from 'react';
import Card from '../../components/Card';

const MeetPeople = () => {
  const images = [
    {
      id: 1,
      image: '/assets/images/MeetPeople/portrait-elegant-old-man-wearing-suit.jpeg',
      name: 'Steve',
      status: 'Boss',
      description: 'your favourite coffee daily lives tempor',
    },
    {
      id: 2,
      image:
        '/assets/images/MeetPeople/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpeg',
      name: 'Sandra',
      status: 'Manager',
      description: 'your favourite coffee daily lives.',
    },
    {
      id: 3,
      image: '/assets/images/MeetPeople/small-business-owner-drinking-coffee.jpeg',
      name: 'Jackson',
      status: 'Senior',
      description: 'your favourite coffee daily lives.',
    },
    {
      id: 4,
      image: '/assets/images/MeetPeople/smiley-business-woman-working-cashier.jpeg',
      name: 'Michelle',
      status: 'Barista',
      description: 'your favourite coffee daily consectetur.',
    },
  ];

  return (
    <section id="meetSection" className="bg-[#b78752]  ">
      <div className="max-w-[85rem] py-28 px-6 grid place-items-center mx-auto gap-16">
        <div>
          <p className="text-center text-white italic text-sm md:text-lg">Creative Baristas</p>
          <h2 className="font-semibold text-white text-3xl md:text-5xl">Meet People</h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:flex-row gap-6 ">
          {images.map(image => (
            <Card
              key={image.id}
              image={image.image}
              name={image.name}
              status={image.status}
              description={image.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetPeople;
