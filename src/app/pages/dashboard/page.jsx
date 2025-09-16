import React from 'react'
import CardComponent from "@/components/CardComponent/CardComponent";
import CartBubble from '@/components/CartBubble/CartBubble';
import Navbar from '@/components/Navbar/Navbar';

import services from '@/app/data/services';

export default function page() {
  return (
    <div className='containe bg-primary'>

      {/* BOTTOM NAVIGATION BAR */}
      {/* <Navbar /> */}
      {/* HEADER SECTION */}
      <div className='py-12 text-center space-y-3 ' data-aos="fade-up">
          <h1 className='text-3xl font-semibold text-primary dark:text-dark'>
          Explore Our Services
          </h1>
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
      {services.map((service) => (
        <CardComponent
        id={service.id}
        key={service.title}
        title={service.title}
        description={service.description}
        price={service.price}
        image={service.image}
        />
      ))}

      <CartBubble />
    </div>
      </div>
    
  );
}
