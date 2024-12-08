'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import CarCard from '../components/CarCard';
import Header from '../components/Header';
import Hero from '../components/Hero';


export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    
    <div className='w-full flex'>
      <div className="first hidden sm:flex w-[1050px] h-[1280px]">
        <Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/>
      </div>
      
      <div className="">
      <CarCard name="Kornigsegg" type="Sports" image="1.png" fuelCapacity="90KM" transmission="Manual" capacity="2 Seat" price={90.00} favoriteIcon="Like.png" />
      <CarCard name="Nissan GT -R" type="Sports" image="2.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />
      <CarCard name="Rolls Royce" type="Sports" image="3.png" fuelCapacity="70KM" transmission="Manual" capacity="2 Seat" price={96.00}  favoriteIcon="Like.png" />
      <CarCard name="Nissan GT -R" type="Sports" image="4.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />
      <CarCard name="Kornigsegg" type="Sports" image="1.png" fuelCapacity="90KM" transmission="Manual" capacity="2 Seat" price={90.00} favoriteIcon="Like.png" />
      <CarCard name="Nissan GT -R" type="Sports" image="2.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />
      <CarCard name="Rolls Royce" type="Sports" image="3.png" fuelCapacity="70KM" transmission="Manual" capacity="2 Seat" price={96.00}  favoriteIcon="Like.png" />
      <CarCard name="Nissan GT -R" type="Sports" image="4.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />
      <CarCard name="Kornigsegg" type="Sports" image="1.png" fuelCapacity="90KM" transmission="Manual" capacity="2 Seat" price={90.00} favoriteIcon="Like.png" />
    
      
      </div>
    </div>
  );
}

